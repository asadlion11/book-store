import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config()
// // Database connection
// const db = mysql.createConnection({
//   host: 'host.docker.internal', // Host system hostname
//   // host: '172.17.159.254', originally locally
//   //host: 'bookdb', // Use the MySQL container name instead of an IP address not worked
//   port: 3306,             
//   user: 'asad',           
//   password: 'asad',       
//   database: 'bookstore' 
// });

//Railway DB
const db = mysql.createConnection({
  uri: process.env.MYSQL_PUBLIC_URL
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Routes
app.get('/books', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.post('/add-book', (req, res) => {
  const { bookName, shelfNo } = req.body;
  db.query('INSERT INTO books (bookName, shelfNo) VALUES (?, ?)', [bookName, shelfNo], (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json("Book added successfully");
    }
  });
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});

