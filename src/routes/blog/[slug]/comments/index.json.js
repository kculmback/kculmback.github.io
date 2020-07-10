import { connectToDatabase } from '../../../../database';
import { Comment } from '../../../../database/models/comments';

export async function findComments(slug) {
  try {
    await connectToDatabase();
    const comments = await Comment.find({ slug }).exec();
    return [...comments].reverse();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function get(req, res, next) {
  const { slug } = req.params;

  const comments = await findComments(slug);

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(comments));
}

export async function post(req, res, next) {
  const { name, comment, slug } = req.body;

  try {
    await Comment.create({
      slug,
      name,
      content: comment,
    });

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end();
  } catch (error) {
    res.writeHead(400, {
      'Content-Type': 'application/json',
    });
    res.end(
      JSON.stringify({
        message: 'Something went wrong',
      })
    );
  }
}
