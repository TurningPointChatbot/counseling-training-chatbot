import { typedUserGET } from '../_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const counsellors = await typedUserGET('counsellor');

  if (counsellors) {
    return {
      status: 200,
      headers: {},
      body: counsellors
    };
  }

  return {
    status: 404
  };
}
