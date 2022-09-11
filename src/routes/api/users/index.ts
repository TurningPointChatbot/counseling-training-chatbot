import { userGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const users = await userGET();

  if (users) {
    return {
      status: 200,
      headers: {},
      body: users
    };
  }

  return {
    status: 404
  };
}
