import { chatbot_module } from '@prisma/client';
import { chatbotModuleGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const modules = await chatbotModuleGET({ id: parseInt(params.module_id) });

  if (modules) {
    return {
      status: 200,
      headers: {},
      body: modules
    };
  }

  return {
    status: 404
  };
}
