import { chatbot_module } from '@prisma/client';
import { prisma } from '../../../../lib/prisma';
import { removeBigInt } from '../../../../lib/helpers';

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
      modules = removeBigInt(foundModule);
    }
  }

  if (modules) {
    return removeBigInt(modules);
  }

  return;
}
