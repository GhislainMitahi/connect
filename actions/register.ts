
// "use server";

// import { signIn } from "@/auth";
// import { SignUpformSchema } from "@/lib/zodSchema";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import * as zod from "zod";


// const register = async (values: zod.z.infer<typeof SignUpformSchema>) => {
//   const validatedFields = SignUpformSchema.safeParse(values);

//   if (!validatedFields.success) {
//     return { error: "Invalid fields" }
//   }

//   const { firstName, lastName, email, password } = validatedFields.data;

//   try {
//     await signIn("credentials", {
//       firstName, lastName, email, password,
//       redirectTo: DEFAULT_LOGIN_REDIRECT
//     })
//   } catch (error) {

//   }
// }

