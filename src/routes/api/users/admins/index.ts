import { typedUserGET } from '../_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const admins = await typedUserGET('admin');

  if (admins) {
    return {
      status: 200,
      headers: {},
      body: admins
    };
  }

  return {
    status: 404
  };
}
