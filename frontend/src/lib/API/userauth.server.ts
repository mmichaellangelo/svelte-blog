import { getUserByUsername } from "./api.server";

export async function logIn(username: string, password: string) {
    const user = await getUserByUsername(username);
}