const { Pool } = require("pg");

const pool = new Pool({
  user: 'agr1ladd3r357',
  host: 'db-agriladder-0357-4244.6xw.cockroachlabs.cloud',
  database: 'agriladderdb',
  password: 'NhXzi6h1Z4O1NG7s_nyRAA',
  port: '26257',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};