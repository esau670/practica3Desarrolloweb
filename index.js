import pg from 'pg';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const URL = process.env.URL_POSTGRES;
const PORT = process.env.PORT;

const pool = new pg.Pool({
  connectionString: URL,
  ssl: {
    rejectUnauthorized: false
  }
});

//ruta para obtener usuarios
app.get('/users', async (req, res) => {
 const users = await pool.query('SELECT * FROM usuarios');
 res.json(users.rows);
});


app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});