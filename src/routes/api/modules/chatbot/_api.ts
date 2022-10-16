import { chatbot_module } from '@prisma/client';
import { prisma } from '../../../../lib/prisma';
import { removeBigInt } from '../../../../lib/helpers';
import { chatbot_module_POST } from '../../../../lib/post_types';

type ChatbotModuleAPIGetParams = {
  id?: number;
  user_id?: number;
};

export async function chatbotModuleGET(
  params?: ChatbotModuleAPIGetParams
): Promise<chatbot_module[] | undefined> {
  let modules: chatbot_module[] = [];

  if (!params) {
    modules = await prisma.chatbot_module.findMany({
      include: {
        chatbot_module_learning_outcome: {
          include: {
            learning_outcome: {
              select: {
                id: true,
                description: true
              }
            }
          }
        }
      }
    });
  } else {
    const foundModule = await prisma.chatbot_module.findUnique({
      where: {
        id: params.id
      },
      include: {
        chatbot_module_learning_outcome: {
          include: {
            learning_outcome: {
              select: {
                id: true,
                description: true
              }
            }
          }
        }
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

export async function chatbotModulePOST(
  new_module: chatbot_module_POST
): Promise<chatbot_module | undefined> {
  const created_module = await prisma.chatbot_module.create({
    data: {
      title: new_module.title,
      description: new_module.description
    }
  });

  if (created_module) {
    return removeBigInt(created_module);
  }

  return;
}
