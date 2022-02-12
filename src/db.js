require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'wcxpocpi',
    host: 'castor.db.elephantsql.com',
    database: 'wcxpocpi',
    password: process.env.DB_PASS,
    port: 5432,
})

module.exports = pool;
