const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "film",
    password: "azmi123",
    port: "5432"
});

module.exports = pool;