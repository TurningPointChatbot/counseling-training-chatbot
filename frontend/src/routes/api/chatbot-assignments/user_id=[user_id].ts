import { chatbotAssignmentsGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const attempts = await chatbotAssignmentsGET({
    user_id: parseInt(params.user_id)
  });

  if (attempts) {
    return {
      status: 200,
      headers: {},
      body: attempts
    };
  }

  return {
    status: 404
  };
}
