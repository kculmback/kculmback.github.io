import { Schema, model } from 'mongoose';
import sanitizeHtml from 'sanitize-html';
import format from 'date-fns/format';
import marked from '../../utils/render-markdown';

const commentsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,
    },
    slug: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      maxlength: 1000,
    },
  },
  { toJSON: { virtuals: true } }
);

commentsSchema.virtual('html').get(function () {
  return sanitizeHtml(marked(this.content), {
    allowedTags: [
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'p',
      'a',
      'ul',
      'ol',
      'nl',
      'li',
      'b',
      'i',
      'strong',
      'em',
      'strike',
      'abbr',
      'code',
      'hr',
      'br',
      'div',
      'table',
      'thead',
      'caption',
      'tbody',
      'tr',
      'th',
      'td',
      'pre',
    ],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
    },
    transformTags: {
      a(tagName, attribs) {
        return {
          tagName,
          attribs: {
            target: '_blank',
            rel: 'noopener noreferrer nofollow',
            href: attribs.href,
          },
        };
      },
    },
  });
});

commentsSchema.virtual('created').get(function () {
  let created = this['_created'];
  if (!created) {
    this['_created'] = this._id.getTimestamp();
    created = this['_created'];
  }
  return format(new Date(created), 'MMMM D, YYYY');
});

export const Comment = model('Comment', commentsSchema);
