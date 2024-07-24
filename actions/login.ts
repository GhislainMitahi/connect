"use server"

import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT} from "@/routes"

import { signIn } from "@/auth";
import { SignInformSchema } from "@/lib/zodSchema";
import { AuthError } from "next-auth";

export const loginWithGoogle = async (values: "string") => {
  const validatedFields = SignInformSchema.safeParse(values);

  if(!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email } = validatedFields.data;
  try {
    await signIn("google", {
      email,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "EmailSignInError":
          return { error: "Invalid email"}
        default:
          return { error: "Something went wrong!" }
      }
    }

    throw error;
  }
};