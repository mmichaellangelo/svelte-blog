import { UserError, createUser, getUserByID } from "$lib/API/api.server.js";
import { DEFAULT_PERMISSIONS } from "$lib/types/types.js";
import { json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types.js";

// Get a user
export async function GET({url}:RequestEvent) {
    let userID = url.searchParams.get('id') ?? null;
    if (userID === null) {
        let username = url.searchParams.get('username') ?? null;
        if (username === null) {
            return new Response(JSON.stringify({ success: false }), {
                status: 400,
                statusText: "Error: User could not be found."
            })
        }
    } else {
        try {
            const user = await getUserByID(parseInt(userID));
            return user;
        } catch (error) {
            console.error(error);
        }
        
        
    }
}

// Create a new user
export async function POST(event) {
    const data = await event.request.formData();
    let email = data.get('email')?.valueOf();
    let username = data.get('username')?.valueOf();
    let password = data.get('password')?.valueOf();
    if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
        return new Response(JSON.stringify({ success: false }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            },
        });
    } else {
        try {
            createUser(username, email, password, DEFAULT_PERMISSIONS)
        } catch (error) {
            console.error(error);
        }
    }
}