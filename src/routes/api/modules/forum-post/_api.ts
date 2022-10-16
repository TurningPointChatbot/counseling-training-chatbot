import { forum_post } from '@prisma/client';
import { prisma } from '../../../../lib/prisma';
import { removeBigInt } from '../../../../lib/helpers';
import { forum_post_POST } from '../../../../lib/post_types';

type ForumPostAPIGetParams = {
  id?: number;
};

export async function forumPostGET(
  params?: ForumPostAPIGetParams
): Promise<forum_post[] | undefined> {
  let posts: forum_post[] = [];

  if (!params) {
    posts = await prisma.forum_post.findMany();
  } else {
    const foundModule = await prisma.forum_post.findUnique({
      where: {
        id: params.id
      }
    });

    if (foundModule) {
      posts = removeBigInt(foundModule);
    }
  }

  if (posts) {
    return removeBigInt(posts);
  }

  return;
}

export async function forumPostPOST(
  new_post: forum_post_POST
): Promise<forum_post | undefined> {
  const created_module = await prisma.forum_post.create({
    data: {
      text: new_post.text,
      username: new_post.username,
      valid: new_post.valid
    }
  });

  if (created_module) {
    return removeBigInt(created_module);
  }

  return;
}
