import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credetials from "next-auth/providers/credentials";
import { SignInformSchema } from "./lib/zodSchema";
// import credentials from "next-auth/providers/credentials";


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        // This approach we can add the ID of that current user so we can be able to access the user from the database
        session.user.customField = token.customField;
      }
      return session
    },
    async jwt({ token }) {
      // console.log("token:", token);
      token.customField = "test";
      return token
    }
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook,
    Credetials({
      credentials: {
        email: {},
        password: {},
        rememberMe: {}
      },
      authorize: async (credentials) => {
        const validateFields = SignInformSchema.safeParse(credentials);
        const { email, password } = validateFields.data;

        let user = null;
        // logic to verify if user exists
        // user = await getUserFromDb(credentials.email, password);

        // If they signIn with Google or Facebook, they will not have a password;

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          return null;
          // throw new Error("User not found.")
        }

        // return user object with the their profile data
        return user
      }
    })
  ],
  session: { strategy: "jwt" }
});