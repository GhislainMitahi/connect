import server from '@/lib/server'
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

// Notice this is only an object, not a full Auth.ts instance
export default {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials) {

                const { email, password } = credentials as { email: string, password: string }
                if (email && password) {
                    try {
                        const userExist = await server.get(
                            `/auth/profile/get/${email}`
                        );
                        if (!userExist.data.data) return null;

                        const response = await server.post(
                            '/auth/login',
                            {
                                email,
                                password,
                            }
                        );
                        const data = response.data;

                        if (response.status !== 201 || !data?.user || !data.access_token) {
                            console.error('Invalid credentials:', response.status, data);
                            throw new Error('Invalid credentials or check your network settings');
                        }

                        const user = {
                            id: data.user.id.toString(),
                            email,
                            firstName: data.user.firstName,
                            name: data.user.name,
                            lastName: data.user.lastName,
                            token: data.token,
                            role: data.user.role,
                        };

                        return user;
                    } catch (error) {
                        console.error('Error during authentication:', error);
                        return null;
                    }
                }
                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;
