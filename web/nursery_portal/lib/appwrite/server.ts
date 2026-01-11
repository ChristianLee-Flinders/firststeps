'use server'
import { cookies } from 'next/headers';
import { Account, Client, Databases } from 'node-appwrite'

async function createAdminClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
        .setKey(process.env.APPWRITE_AUTH_API_KEY!);

    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        }
    }
}

async function createSessionClient() {
    const sessionClient = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);
    
    const session = (await cookies()).get('a_session_' + process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    if (!session || !session.value) {
        throw new Error('No session cookie found');
    }

    sessionClient.setSession(session.value);

    return {
        get account() {
            return new Account(sessionClient);
        },
        sessionClient
    }
}

export { createAdminClient, createSessionClient };

