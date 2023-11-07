import { load } from 'ts-dotenv';
import express, {Request, Response, NextFunction} from "express";
import jwt = require('jsonwebtoken');

const env = load({
    TOKEN_SECRET: String,
    REFRESH_SECRET: String,
    MAIN_PORT: Number,
    AUTH_PORT: Number,
})

const app = express();
app.use(express.json());

app.get('/', authenticateToken, (req, res) => {
    res.status(200).json({
        hello: "motherfucker",
        hey: "hi, how you doing"
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };
    const token = generateAccessToken(username);
    res.status(200).json({ accessToken: token });
})



function generateAccessToken(username: string) {
    return jwt.sign(username, env.TOKEN_SECRET);
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader?.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    // jwt.verify(token, env.TOKEN_SECRET, (err, ))
}

app.listen(env.MAIN_PORT, () => {
    console.log(`API Listening on Port ${env.MAIN_PORT}`)
})