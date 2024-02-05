import express from 'express';
import mysql from 'mysql';
const app = express();
const connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'test',
});
app.get("/", (req, res) => {
    connection.query("SELECT * FROM Student", (err, rows) => {
        if (err) {
            res.json({
                success: false,
                error: err,
            });
        }
        else {
            res.json({
                success: true,
                rows,
            });
        }
    });
}); // Added missing closing parenthesis here
// Corrected route for fetching users
app.get("/user", (req, res) => {
    connection.query("SELECT * FROM User", (err, rows) => {
        if (err) {
            res.json({
                success: false,
                error: err,
            });
        }
        else {
            res.json({
                success: true,
                rows,
            });
        }
    });
});
app.listen(5000, () => console.log("Listening on port 5000 !!!"));
