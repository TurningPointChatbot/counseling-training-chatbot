import { userModifyPOST } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ params }) {
  const user = await userModifyPOST(params);

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
