const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'schoolfoodreservation',
})

db.connect((err) => {
    if(err){
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database.');
})

function checkAdminCredentials(username,password,callback){
    const query = 'SELECT * FROM admin WHERE username = ? AND password = ?';
    db.query(query, [username,password], (error,results) =>{
        if (error) {
            callback(error);
            return;
        }
         // If a matching user is found, results will contain the user data
        // If not, results will be an empty array
        callback(null, results.length > 0);

    });
}

module.exports = {
    checkAdminCredentials
};


app.listen(8081, ()=> 
{
    console.log("listening");
}   )