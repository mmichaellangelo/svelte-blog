import { createUser } from "$lib/API/api.server.js";
import { DEFAULT_PERMISSIONS } from "$lib/types/types.js";
import type { Actions } from "@sveltejs/kit";
import type { User } from "$lib/types/types.js";

export const actions = {
    createUser: async ({ request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const email = data.get('email');
        const password = data.get('password');
        console.log(`Email: ${email}, Username: ${username}, Password: ${password}`);
        if (!(typeof username == "string" && typeof email == "string" && typeof password == "string" )) {
            return { success: false }
        } else {
            let user = await createUser(username, email, password, DEFAULT_PERMISSIONS);
            return { success: true };
        }
        
    }
}