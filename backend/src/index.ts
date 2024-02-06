import express, { Request, Response } from 'express';
import { createPool } from 'mysql2/promise';
import cors from 'cors';
import {RowDataPacket} from "mysql2";


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

interface UserData {
    name: string;
    firstName: string;
    nickName: string;
    mail: string;
    isManager: number;
}

// Function to get students using async/await
async function getStudents() {
    const [rows] = await pool.query('SELECT * FROM Student');
    return rows;
}

async function getUsers() {
    const [rows] = await pool.query('SELECT * FROM `myUser`');
    return rows;
}

async function createUsers(data: UserData){
    console.log('createUser', data);
    try{
        const [user] = await pool.execute(
            'INSERT INTO myUser (user_name, user_firstName, user_nickName, user_mail, user_isManager) VALUES (?, ?, ?, ?, ?)',
            [data.name, data.firstName, data.nickName, data.mail, data.isManager]
        );
        return user as RowDataPacket[];
    }catch(error){
        console.error('POST ERROR',error);
    }
}
// Route to fetch all students
app.get("/", async (req: Request, res: Response) => {
    try {
        const rows = await getStudents();
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error('GET ERROR',error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.get("/user", async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.json({success: true, data: users});
    } catch (error) {
        console.error('ERRORRRRRRRRRRR : ',error);
        res.status(500).json({success: false, message: 'Internal server error TOOOOOOOOOOOOOTO'});
    }
});

app.post('/signup', async (req:Request, res:Response)=>{
    console.log('signup req.body : ', req.body)
    try{
        const user = await createUsers(req.body.data);
        res.json({success:true, data:user})
    }catch(error){
        res.status(500).json({succes: false, message:'signup failed'});
    }
});

app.listen(5000, () => console.log("Listening on port 5000 !!!"));
