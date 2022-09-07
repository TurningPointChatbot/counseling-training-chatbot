import { chatbot_module } from '@prisma/client';
import { prisma, toObject } from '../../../lib/prisma';

type ChatbotModuleAPIGetParams = {
  id?: number;
  user_id?: number;
};

export async function chatbotModuleGET(
  params?: ChatbotModuleAPIGetParams
): Promise<chatbot_module[] | undefined> {
  let modules: chatbot_module[] = [];

  if (!params) {
    modules = await prisma.chatbot_module.findMany();
  } else {
    const foundModule = await prisma.chatbot_module.findUnique({
      where: {
        id: params.id
      }
    });

    if (foundModule) {
      modules = toObject(foundModule);
    }
  }

  if (modules) {
    return toObject(modules);
  }

  return;
}
