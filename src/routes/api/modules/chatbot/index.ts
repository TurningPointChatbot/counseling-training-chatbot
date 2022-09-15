import { chatbotModuleGET } from './_api';

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
