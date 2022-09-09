import { user } from '@prisma/client';
import { prisma } from '../../../lib/prisma';
import { removeBigInt } from '../../../lib/helpers';

type UserAPIGetParams = {
  id: number;
  attempts?: boolean;
};

export async function userGET(
  params?: UserAPIGetParams
): Promise<user[] | undefined> {
  let users: user[] = [];

  if (!params) {
    users = await prisma.user.findMany();
  } else {
    const foundUser = await prisma.user.findUnique({
      where: {
        id: params.id
      },
      include: {
        chatbot_attempt: params.attempts
      }
    });

    if (foundUser) {
      users = removeBigInt(foundUser);
    }
  }

  if (users) {
    return removeBigInt(users);
  }

  return;
}
