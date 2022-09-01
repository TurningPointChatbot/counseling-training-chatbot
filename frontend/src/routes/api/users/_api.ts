import { user } from '@prisma/client';
import { prisma, toObject } from '../../../lib/prisma';

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
      users = toObject(foundUser);
    }
  }

  if (users) {
    return toObject(users);
  }

  return;
}
