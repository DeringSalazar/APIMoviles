require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 5000
});

pool.on('error', (err) => {
  console.error('Error inesperado del pool:', err.message);
});

async function testDbConnection() {
  try {
    const result = await pool.query('SELECT NOW() AS fecha');
    console.log('Conexión a PostgreSQL exitosa');
    console.log(result.rows[0]);
  } catch (error) {
    console.error('Error conectando a PostgreSQL:', error.message);
  }
}

module.exports = {
  pool,
  testDbConnection
};