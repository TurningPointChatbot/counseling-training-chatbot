import { chatbot_assignment } from '@prisma/client';
import { prisma } from '../../../lib/prisma';
import { removeBigInt } from '../../../lib/helpers';
import { chatbot_assignment_POST } from '../../../lib/post_types';
import { chatbot_assignment_PATCH } from '../../../lib/patch_types';

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

export async function chatbotAssignmentsPOST(
  new_assignment: chatbot_assignment_POST
): Promise<chatbot_assignment | undefined> {
  const created_assignment = await prisma.chatbot_assignment.create({
    data: {
      cbm_id: BigInt(new_assignment.module_id),
      user_id: BigInt(new_assignment.user_id),
      duedate: new_assignment.due_date
    }
  });

  if (created_assignment) {
    return removeBigInt(created_assignment);
  }

  return;
}

export async function moduleSpecificAssignmentGET(
  module_id: number
): Promise<chatbot_assignment[] | undefined> {
  const assignments = await prisma.chatbot_assignment.findMany({
    where: {
      cbm_id: module_id
    },
    include: {
      user: true
    }
  });

  if (assignments) {
    return removeBigInt(assignments);
  }

  return;
}

export async function chatbotAssignmentsPATCH(
  modified_assignment: chatbot_assignment_PATCH
): Promise<chatbot_assignment | undefined> {
  const find_params = {
    cbm_id: BigInt(modified_assignment.cbm_id),
    user_id: BigInt(modified_assignment.user_id),
    created_at: modified_assignment.created_at
  };

  const update_params = {
    duedate: modified_assignment.duedate,
    completed_at: modified_assignment.completed_at,
    completed: modified_assignment.completed,
    attempt_id: modified_assignment.attempt_id
      ? BigInt(modified_assignment.attempt_id)
      : undefined
  };

  const assignment = await prisma.chatbot_assignment.update({
    where: {
      cbm_id_user_id_created_at: find_params
    },
    data: update_params
  });

  if (assignment) {
    return removeBigInt(assignment);
  }

  return;
}