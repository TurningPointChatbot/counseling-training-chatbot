import { learning_outcome } from '@prisma/client';
import { moduleSpecificLearningOutcomesGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const learning_outcomes: learning_outcome[] | undefined =
    await moduleSpecificLearningOutcomesGET(parseInt(params.module_id));

  if (learning_outcomes) {
    return {
      status: 200,
      headers: {},
      body: learning_outcomes
    };
  }

  return {
    status: 404
  };
}
