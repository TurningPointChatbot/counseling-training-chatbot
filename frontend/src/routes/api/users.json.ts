import { prisma, toObject } from '../../lib/prisma';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const users = await prisma.user.findMany();

  if (users) {
    return {
      status: 200,
      headers: {},
      body: toObject(users)
    };
  }

  return {
    status: 404
  };
}
