import { learning_outcome } from '@prisma/client';
import { prisma } from '../../../lib/prisma';
import { removeBigInt } from '../../../lib/helpers';

export async function moduleSpecificLearningOutcomesGET(
  module_id: number
): Promise<learning_outcome[] | undefined> {
  const learning_outcomes =
    await prisma.chatbot_module_learning_outcome.findMany({
      where: {
        cbm_id: module_id
      },
      select: {
        learning_outcome: {
          select: {
            id: true,
            description: true
          }
        }
      }
    });

  if (learning_outcomes) {
    const outcomes = learning_outcomes.map((elem) => {
      return elem['learning_outcome'];
    });

    return removeBigInt(outcomes);
  }

  return;
}
