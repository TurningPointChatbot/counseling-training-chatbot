import { userModifyPOST } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
  const new_user = await request.json();

  const user = await userModifyPOST(new_user);

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
