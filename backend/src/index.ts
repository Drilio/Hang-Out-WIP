import express, { Request, Response } from 'express';
import mysql from 'mysql';
import { Pool } from 'mysql';

// If you're using environment variables, ensure they're loaded
// For example, using dotenv package (you might need to install it using npm or yarn)
// import dotenv from 'dotenv';
// dotenv.config();

const app = express();

// Improved type annotation for the connection using Pool type from mysql
const connection: Pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'test',
});

app.get("/", (req: Request, res: Response) => {
    connection.query("SELECT * FROM Student", (err, rows) => {
        if (err) {
            res.json({
                success: false,
                error: err,
            });
        } else {
            res.json({
                success: true,
                rows,
            });
        }
    });
});

app.listen(5000, () => console.log("Listening on port 5000 !!!"));
