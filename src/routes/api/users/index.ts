import { userGET } from './_api';
import { userFromEmailGET } from './_api';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GETUser() {
  const users = await userGET();

  if (users) {
    return {
      status: 200,
      headers: {},
      body: users
    };
  }

  return {
    status: 404
  };
}

export async function GETUserFromEmail() {
  const users = await userFromEmailGET();

  if (users) {
    return {
      status: 200,
      headers: {},
      body: users
    };
  }

  return {
    status: 404
  };
}