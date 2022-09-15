import { chatbot_module } from '@prisma/client';
import { chatbot_module_POST } from '../../../../lib/post_types';
import { chatbotModuleGET, chatbotModulePOST } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const modules = await chatbotModuleGET();

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

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
  const new_module: chatbot_module_POST = await request.json();

  const created_module: chatbot_module | undefined = await chatbotModulePOST(
    new_module
  );

  if (created_module) {
    return {
      status: 200,
      headers: {},
      body: created_module
    };
  }

  return {
    status: 400
  };
}
