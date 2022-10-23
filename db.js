import mysql from "mysql";
import dotenv from "dotenv";

require("dotenv").config();

const hots = process.env.DB_HOST

export const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "bb90327f9c67eb",
    password: "277b074c",
    database: "heroku_4073c21c6a2867f"
})
