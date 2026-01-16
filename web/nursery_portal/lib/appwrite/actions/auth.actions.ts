'use server'

import { cookies } from "next/headers";
import { createAdminClient } from "../server";

export async function login({email, password}: { email: string, password: string }) {

    if (!email || !password) {
        return { error: 'Email and password are required' };
    }

    const { account } = await createAdminClient();

    try {
        const session = await account.createEmailPasswordSession({email, password});

        (await cookies()).set('session_token', session.secret, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            expires: new Date(session.expire),
            path: '/',
        });

        return { success: true };

    } catch {
        return { error: 'Invalid email or password' };
    }
}
