import { hash } from "bcrypt";

const saltRounds = 10;

export async function hashPassword(password: string): Promise<string> {
    let hashed = await hash(password, saltRounds);
    return hashed;
}
