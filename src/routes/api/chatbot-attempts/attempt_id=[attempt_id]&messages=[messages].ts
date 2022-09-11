import { chatbotAttemptsGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const messages = params.messages.toLowerCase() === 'true';

  const user = await chatbotAttemptsGET({
    attempt_id: parseInt(params.attempt_id),
    messages: messages
  });

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
