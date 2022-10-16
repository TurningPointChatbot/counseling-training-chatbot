import { chatbot_assignment } from '@prisma/client';
import { moduleSpecificAssignmentGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const assignments: chatbot_assignment[] | undefined =
    await moduleSpecificAssignmentGET(parseInt(params.module_id));

  if (assignments) {
    return {
      status: 200,
      headers: {},
      body: assignments
    };
  }

  return {
    status: 404
  };
}
