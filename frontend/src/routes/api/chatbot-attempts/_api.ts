import { chatbot_attempt } from '@prisma/client';
import { prisma } from '../../../lib/prisma';
import { removeBigInt } from '../../../lib/helpers';

type ChatbotAttemptsAPIGetParams = {
  attempt_id: number;
  messages: boolean;
};

export async function chatbotAttemptsGET(
  params?: ChatbotAttemptsAPIGetParams
): Promise<chatbot_attempt[] | undefined> {
  let attempts: chatbot_attempt[] = [];

  if (!params) {
    attempts = await prisma.chatbot_attempt.findMany();
  } else {
    const foundAttempts = await prisma.chatbot_attempt.findMany({
      where: {
        id: params.attempt_id
      },
      include: {
        chatbot_attempt_message: params.messages
      }
    });

    if (foundAttempts) {
      attempts = removeBigInt(foundAttempts);
    }
  }

  if (attempts) {
    return removeBigInt(attempts);
  }

  return;
}
