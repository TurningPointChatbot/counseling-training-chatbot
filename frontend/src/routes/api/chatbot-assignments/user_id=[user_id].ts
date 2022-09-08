import { chatbotAssignmentsGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const assignments = await chatbotAssignmentsGET({
    user_id: parseInt(params.user_id)
  });

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
