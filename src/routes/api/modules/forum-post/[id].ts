import { forumPostGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const post = await forumPostGET({
    id: parseInt(params.id)
  });

  if (post) {
    return {
      status: 200,
      headers: {},
      body: post
    };
  }

  return {
    status: 404
  };
}
