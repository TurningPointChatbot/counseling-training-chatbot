import { chatbot_attempt } from '@prisma/client';
import { chatbot_attempt_POST } from '../../../lib/post_types';
import { chatbotAttemptsPOST } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
  const new_attempt: chatbot_attempt_POST = await request.json();

  const created_attempt: chatbot_attempt | undefined =
    await chatbotAttemptsPOST(new_attempt);

  if (created_attempt) {
    return {
      status: 200,
      headers: {},
      body: created_attempt
    };
  }

  return {
    status: 400
  };
}
