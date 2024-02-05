import express, { Request, Response } from 'express';
import { createPool } from 'mysql2/promise';
import cors from 'cors';


const app = express();



app.use(cors({ origin:'*'}));


app.use(express.json())



// Create a connection pool
const pool = createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'test',
});

// Function to get students using async/await
async function getStudents() {
    const [rows] = await pool.query('SELECT * FROM Student');
    return rows;
}

async function getUsers() {
    const [rows] = await pool.query('SELECT * FROM `User`');
    return rows;
}

// Route to fetch all students
app.get("/", async (req: Request, res: Response) => {
    try {
        const rows = await getStudents();
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.get("/user", async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.json({success: true, data: users});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
});

app.listen(5000, () => console.log("Listening on port 5000 !!!"));
