import { logIn } from "$lib/API/userauth.server.js";
import type { Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const username = data.get("username");
        const password = data.get("password");

        if (!(typeof username == "string" && typeof password == "string")) {
            return { success: false }
        } else {
            try {
                let token = await logIn(username, password);
            } catch (error) {
                console.error(error);
            }
            
        }
    }
}