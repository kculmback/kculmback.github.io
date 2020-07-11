import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import { json } from 'body-parser';
import * as sapper from '@sapper/server';
import { config } from 'dotenv';
import { connectToDatabase } from './database';
// import { v4 as uuidv4 } from 'uuid';
// import helmet from 'helmet';

config();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

connectToDatabase();

const app = polka() // You can also use Express
  .use(
    // (req, res, next) => {
    //   res.locals = {
    //     nonce: uuidv4(),
    //   };
    //   next();
    // },
    // helmet({
    //   contentSecurityPolicy: {
    //     directives: {
    //       scriptSrc: [
    //         "'self'",
    //         (req, res) => {
    //           console.log(res.locals);
    //           return `'nonce-${res.locals.nonce}'`;
    //         },
    //       ],
    //     },
    //   },
    // }),
    json(),
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({})
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });

export default app.handler;
