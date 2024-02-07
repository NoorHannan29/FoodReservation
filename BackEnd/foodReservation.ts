import express, { Request, Response } from 'express';
import mysql, { Connection, MysqlError, Query } from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

const db: Connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'schoolfoodreservation',
});

db.connect((err: MysqlError | null) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database.');
});

export function checkAdminCredentials(username: string, password: string, callback: (error: MysqlError | null, isValid: boolean) => void): void {
    const query: string = 'SELECT * FROM admin WHERE username = ? AND password = ?';
    db.query(query, [username, password], (error: MysqlError | null, results: any[]) => {
        if (error) {
            callback(error, false);
            return;
        }
        // If a matching user is found, results will contain the user data
        // If not, results will be an empty array
        callback(null, results.length > 0);
    });
}

const foodReservation = {
    checkAdminCredentials: (username: string, password: string) => {
        // Implement checkAdminCredentials logic here
    }
};