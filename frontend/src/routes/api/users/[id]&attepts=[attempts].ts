import { userGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const attempts = params.attempts.toLowerCase() === 'true';

  const user = await userGET({ id: parseInt(params.id), attempts: attempts });

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
