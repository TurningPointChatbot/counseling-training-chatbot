import prisma from '$lib/prisma';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const users = await prisma.user.findMany();

  function toObject(obj) {
    return JSON.parse(
      JSON.stringify(
        obj,
        (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
      )
    );
  }

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
