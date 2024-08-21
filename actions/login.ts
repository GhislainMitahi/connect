"use server"
import z from 'zod';

import { SignInformSchema } from '@/lib/zodSchema';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { signIn } from '../auth';

export const login = async (values: z.infer<typeof SignInformSchema>) => {
  const { email, password } = values;
  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case 'CredentialsSignin':
          return {
            error: 'Invalid Credentials',
          };
        default:
          return { error: 'Invalid Email or password!' };
      }
    }
    throw err;
  }
};