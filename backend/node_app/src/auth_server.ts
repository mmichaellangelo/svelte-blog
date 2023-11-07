import { load } from 'ts-dotenv';
import express, {Request, Response, NextFunction} from "express";
import jwt = require('jsonwebtoken');
import { getUserByUsername } from './api';
import { compare } from "bcrypt";

const env = load({
    TOKEN_SECRET: String,
    REFRESH_SECRET: String,
    MAIN_PORT: Number,
    AUTH_PORT: Number,
    TOKEN_EXPIRATION: String,
    REFRESH_EXPIRATION: String,
})


const app = express();
app.use(express.json());


app.post("/login", authenticateUser, (req, res) => {
    // authenticated
    // generate tokens
    const accessToken = jwt.sign({ username: req.body.username }, env.TOKEN_SECRET, { expiresIn: env.TOKEN_EXPIRATION });
    const refreshToken = jwt.sign({ username: req.body.username }, env.REFRESH_SECRET, { expiresIn: env.REFRESH_EXPIRATION });
    // send tokens with status 200 OK
    res.status(200).json({ 
        accessToken: accessToken,
        refreshToken: refreshToken,
    });
})

app.post("/token", (req, res) => {
    const refreshToken = req.body.token;
})

app.post("/logout", (req, res) => {

})

app.listen(env.AUTH_PORT, () => {
    console.log(`Auth Listening on Port ${env.AUTH_PORT}`)
})

async function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const username = req.body.username;
    const password = req.body.password;

    // authenticate password
    const userFromDB = await getUserByUsername(username);
    const isPasswordMatch = await compare(password, userFromDB.password_hashed);
    if (!isPasswordMatch) {
        res.sendStatus(401);
    } else {
        next();
    }
}
