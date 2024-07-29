import { z } from "zod";

export const OPTformRegister = z.object({
  country: z.string().min(1, "Country is required"),
  number: z.string().min(1, "Phone number is required")
})

export const otpSchema = z.object({
  otp: z.string().min(5, "Your identification code is required").max(5, "OTP must be exactly 5 characters").regex(/^\d+$/, "OTP must contain only digits")
});

export const SignUpformSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "last Name must be at least 2 characters.",
  }),
  // userName: z.string().min(2, {
  //   message: "User Name must be at least 2 characters.",
  // }),
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 8 characters.",
  }),
});

export const SignInformSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 8 characters.",
  }),
  rememberMe: z.boolean().default(false).optional(),
});

export const EmailRequestFormSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 8 characters.",
  }),
  rememberMe: z.boolean().default(false).optional(),
});

export const ResetPassWordFormSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    passwordConfirm: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match.",
    path: ["passwordConfirm"],
  });
