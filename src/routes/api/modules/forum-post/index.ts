import { forum_post } from '@prisma/client';
import { forum_post_POST } from '../../../../lib/post_types';
import { forumPostGET, forumPostPOST } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const modules = await forumPostGET();

  if (modules) {
    return {
      status: 200,
      headers: {},
      body: modules
    };
  }

  return {
    status: 404
  };
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
  const new_module: forum_post_POST = await request.json();

  const created_module: forum_post | undefined = await forumPostPOST(
    new_module
  );

  if (created_module) {
    return {
      status: 200,
      headers: {},
      body: created_module
    };
  }

  return {
    status: 400
  };
}
