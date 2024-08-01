import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { server } from './lib/server';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      try {
        if (token.sub) {
          session.user.id = token.sub;
        }
        if (token.user) {
          session.user.name = token.user.firstName && token.user.lastName ? `${token.user.firstName} ${token.user.lastName}` : token.user.name;
          session.user.firstName = token.user.firstName || 'DefaultFirstName';
          session.user.lastName = token.user.lastName || 'DefaultLastName';
          session.user.email = token.user.email || session.user.email;
          session.user.role = token.user.role || 'user';
        }
      } catch (error) {
        console.error('Error in session callback:', error);
      }
      return session;
    },

    async jwt({ token, account }) {
      try {
        if (!token.email) {
          console.warn('JWT callback - No email found in token:', token);
          return token;
        }

        const response = await server.get(`/auth/profile/get/${token.email}`);

        if (response.data.message !== "success" && response.data.statusCode >= 400) {
          console.error('JWT callback - Error from server:', response.data.message);
          token.error = "Session expired. Please log in again.";
          return token;
        }

        if (response.data && response.data.data) {
          token.user = response.data.data;
        } else if (account && (account.provider === "google" || account.provider === "facebook")) {
          const nameParts = token.name ? token.name.split(' ') : ['FirstName', 'LastName'];
          const newUser = await server.post('/auth/signup', {
            email: token.email,
            firstName: nameParts[0],
            lastName: nameParts.slice(1).join(' '),
            isEmailConfirmed: true
          });

          if (newUser.data.success) {
            token.user = newUser.data.user;
          } else {
            console.warn('Failed to register user:', token.email);
          }
        }
      } catch (error) {
        console.error('Error in jwt callback:', error);
        token.error = "An error occurred.";
      }
      return token;
    }
  },
  session: { strategy: 'jwt' },
  ...authConfig,
});
