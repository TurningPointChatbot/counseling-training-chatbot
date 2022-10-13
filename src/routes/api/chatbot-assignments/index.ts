import { chatbot_assignment } from '@prisma/client';
import { chatbot_assignment_PATCH } from '../../../lib/patch_types';
import { chatbot_assignment_POST } from '../../../lib/post_types';
import { chatbotAssignmentsPOST, chatbotAssignmentsPATCH } from './_api';

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

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function PATCH({ request }) {
  const modified_assignment: chatbot_assignment_PATCH = await request.json();

  const confirmed_assignment: chatbot_assignment | undefined =
    await chatbotAssignmentsPATCH(modified_assignment);

  console.log(confirmed_assignment);

  if (confirmed_assignment) {
    return {
      status: 200,
      headers: {},
      body: confirmed_assignment
    };
  }

  return {
    status: 400
  };
}
