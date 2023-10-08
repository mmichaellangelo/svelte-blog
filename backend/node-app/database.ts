require('dotenv').config();
import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

var db = mysql.createConnection(access);

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

export function getPost(id:string) {
    db.query(`
    SELECT * FROM ${process.env.DB_DATABASE}
    WHERE id = ?`, [id]);
}

`
CREATE TABLE POST()
    ID INT AUTO_INCREMENT NOT NULL
    TITLE VARCHAR (255)
    DATE_POSTED 
    PRIMARY KEY (ID)

`
