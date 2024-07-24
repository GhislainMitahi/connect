
"use server";

import * as zod from "zod";
import { SignUpformSchema } from "@/lib/zodSchema";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


const register = async (values: zod.z.infer<typeof SignUpformSchema>) => {
  const validatedFields = SignUpformSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" }
  }

  const { firstName, lastName, surName, email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      firstName, lastName, surName, email, password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {

  }
}

