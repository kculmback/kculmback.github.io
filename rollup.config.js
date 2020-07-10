import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import glob from 'rollup-plugin-glob';
import { terser } from 'rollup-plugin-terser';
// import marked from 'marked';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import { processMarkdownFile } from './src/utils/render-markdown';
const { preprocess } = require('./svelte.config');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    warning.message.includes('/@sapper/')) ||
  onwarn(warning);

const markdown = () => ({
  transform(md, id) {
    if (!/\.md$/.test(id)) return null;

    const exportFromModule = JSON.stringify({
      ...processMarkdownFile(md, id),
      path: id,
    });

    return {
      code: `export default ${exportFromModule}`,
      map: { mappings: '' },
    };
  },
});

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess,
      }),
      resolve(),
      commonjs(),
      markdown(),
      glob(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          runtimeHelpers: true,
          exclude: ['node_modules/@babel/**'],
          presets: [['@babel/preset-env', { targets: '> 0.25%, not dead' }]],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            ['@babel/plugin-transform-runtime', { useESModules: true }],
          ],
        }),

      !dev && terser({ module: true }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      json(),
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        generate: 'ssr',
        dev,
        preprocess,
      }),
      resolve(),
      commonjs(),
      markdown(),
      glob(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives'))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
};
