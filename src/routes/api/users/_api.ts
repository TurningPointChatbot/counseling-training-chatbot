import {chatbot_attempt_message, user} from '@prisma/client';
import { prisma } from '../../../lib/prisma';
import { removeBigInt } from '../../../lib/helpers';
import {chatbot_attempt_message_POST, user_POST} from '../../../lib/post_types';

type UserAPIGetParams = {
  id: number;
  attempts?: boolean;
};

type UserFromEmailAPIGetParams = {
  email: string;
}

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

export async function userFromEmailGET(
    params?: UserFromEmailAPIGetParams
): Promise<user[] | undefined> {
  let users: user[] = [];

  if (!params) {
    users = await prisma.user.findMany();
  } else {
    const foundUser = await prisma.user.findUnique({
      where: {
        email: params.email
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

export async function typedUserGET(
  user_type_name: 'counsellor' | 'admin'
): Promise<user[] | undefined> {
  const counsellors = await prisma.user_type.findMany({
    where: {
      name: user_type_name
    },
    select: {
      user: true
    }
  });

  if (counsellors) {
    return removeBigInt(counsellors[0]['user']);
  }

  return;
}

export async function userModifyPOST(
    modified_user : user_POST
): Promise<chatbot_attempt_message | undefined> {
  const adjusted_user = await prisma.user.create({
    data: {
      id: modified_user.id,
      fname: modified_user.fname,
      lname: modified_user.lname,
      email: modified_user.email,

    }
  });

  if (adjusted_user) {
    return removeBigInt(adjusted_user);
  }

  return;
}

