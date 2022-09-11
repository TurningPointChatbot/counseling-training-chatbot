import { chatbotMessagesPOST } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
  const new_message = await request.json();

  const created_message = await chatbotMessagesPOST(new_message);

  if (created_message) {
    return {
      status: 200,
      headers: {},
      body: created_message
    };
  }

  return {
    status: 400
  };
}
