import { chatbot_assignment } from '@prisma/client';
import { prisma } from '../../../lib/prisma';
import { removeBigInt } from '../../../lib/helpers';

type ChatbotAssignmentsAPIGetParams = {
  user_id: number;
};

export async function chatbotAssignmentsGET(
  params?: ChatbotAssignmentsAPIGetParams
): Promise<chatbot_assignment[] | undefined> {
  let assignments: chatbot_assignment[] = [];

  if (!params) {
    assignments = await prisma.chatbot_assignment.findMany();
  } else {
    const foundAssignments = await prisma.chatbot_assignment.findMany({
      where: {
        user_id: params.user_id
      }
    });

    if (foundAssignments) {
      assignments = removeBigInt(foundAssignments);
    }
  }

  if (assignments) {
    return removeBigInt(assignments);
  }

  return;
}
