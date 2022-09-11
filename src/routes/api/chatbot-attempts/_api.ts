import { chatbot_attempt } from '@prisma/client';
import { chatbot_attempt_POST } from '../../../lib/post_types';
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

export async function chatbotAttemptsPOST(
  new_attempt: chatbot_attempt_POST
): Promise<chatbot_attempt | undefined> {
  const current_time = new Date();

  const created_attempt = await prisma.chatbot_attempt.create({
    data: {
      user_id: BigInt(new_attempt.user_id),
      cbm_id: BigInt(new_attempt.cbm_id),
      started_at: current_time,
      last_accessed: current_time
    }
  });

  if (created_attempt) {
    return removeBigInt(created_attempt);
  }

  return;
}
