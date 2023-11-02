import { sign, verify } from "jsonwebtoken";
import { getUserByUsername } from "./api.server";
import { compare } from "bcrypt";
import type { User } from "$lib/types/types";
import { ACCESS_TOKEN_SECRET } from '$env/static/private'

export async function logIn(username: string, password: string) {
    const user = await getUserByUsername(username);
    let res = await compare(password, user.password_hashed);
    if (!res) {
        return null;
    } else {
        const accessToken = sign(user, ACCESS_TOKEN_SECRET);
        return accessToken;
    }
}

export async function authenticateToken(token: string) {
    verify(token, ACCESS_TOKEN_SECRET);
}

