'use server'

import { createSessionClient } from "../server";

async function getUser() {
    const { account } = await createSessionClient();
    
    try {
        const user = await account.get();
        return { user };
    } catch(error ) {
        return { error: 'Unable to fetch user' };
    }
}



export { getUser };