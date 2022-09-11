import { chatbot_attempt_message } from '@prisma/client';
import { removeBigInt } from '../../../lib/helpers';
import { chatbot_attempt_message_POST } from '../../../lib/post_types';
import prisma from '../../../lib/prisma';

export async function chatbotMessagesPOST(
  new_message: chatbot_attempt_message_POST
): Promise<chatbot_attempt_message | undefined> {
  const created_message = await prisma.chatbot_attempt_message.create({
    data: {
      attempt_id: BigInt(new_message.attempt_id),
      created_at: new Date(),
      text: new_message.text,
      message_type: BigInt(new_message.message_type === 'user' ? 1 : 2)
    }
  });

  if (created_message) {
    return removeBigInt(created_message);
  }

  return;
}
