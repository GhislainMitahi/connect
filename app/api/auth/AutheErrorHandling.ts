import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function errorHandling(req: NextRequest) {  // Use NextRequest instead of Request
    if (!process.env.NEXTAUTH_SECRET) {
        throw new Error('NEXTAUTH_SECRET is not set.');
    }
    const token = await getToken({
        req, secret: process.env.NEXTAUTH_SECRET!,
        salt: ''
    });

    // Redirect based on token status or errors
    if (token && token.error) {
        const url = req.nextUrl.clone();
        if (token.error === "Session expired. Please log in again.") {
            url.pathname = '/auth/login';
            const response = NextResponse.redirect(url);
            response.cookies.set('error', 'Session expired', { path: '/', maxAge: 3600 });
            return response;
        } else if (token.error === "An error occurred.") {
            url.pathname = '/error';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}