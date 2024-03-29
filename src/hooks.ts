// src/hooks.ts
import { handleAuth } from '@supabase/auth-helpers-sveltekit';
import type { GetSession, Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle: Handle = sequence(...handleAuth({
  logout: { returnTo: '/'}
}));

export const getSession: GetSession = async (event) => {
  const { user, accessToken, error } = event.locals;
  return { 
    user, 
    accessToken, 
    error
  }
}
