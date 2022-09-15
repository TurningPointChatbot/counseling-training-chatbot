import { chatbot_assignment } from '@prisma/client';
import { chatbot_assignment_POST } from '../../../lib/post_types';
import { chatbotAssignmentsPOST } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
  const new_assignment: chatbot_assignment_POST = await request.json();

  const created_assignment: chatbot_assignment | undefined =
    await chatbotAssignmentsPOST(new_assignment);

  if (created_assignment) {
    return {
      status: 200,
      headers: {},
      body: created_assignment
    };
  }

  return {
    status: 400
  };
}
