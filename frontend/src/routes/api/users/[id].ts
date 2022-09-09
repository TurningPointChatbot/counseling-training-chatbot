import { userGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const user = await userGET({ id: parseInt(params.id) });

  if (user) {
    return {
      status: 200,
      headers: {},
      body: user
    };
  }

  return {
    status: 404
  };
}
