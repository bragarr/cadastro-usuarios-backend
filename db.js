import mysql from "mysql";

export const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "bb90327f9c67eb",
    password: "277b074c",
    database: "heroku_4073c21c6a2867f"
})
