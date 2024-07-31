import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            firstName: string;
            lastName: string;
            email: string;
            role: string;
        };
    }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            id: string;
            name: string;
            firstName: string;
            lastName: string;
            email: string;
            role: string;
        };
    }
}

import { Session } from 'next-auth';

// Define the type for UpdateSession
type UpdateSession = (data: Session | null) => void;

// Define the user type based on the provided session data structure
interface User {
    name: string;
    email: string;
    id: string;
    firstName: string;
    lastName: string;
    role: string;
}

// Define the session data structure
interface CustomSession {
    user: User;
    expires: string;
}

// Define the type for the session state
type SessionState =
    | { update: UpdateSession; data: CustomSession; status: 'authenticated' }
    | { update: UpdateSession; data: null; status: 'unauthenticated' | 'loading' };