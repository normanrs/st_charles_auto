const pool = require('./db');

async function healthcheck() {
    try {
        const result = await pool.query(
            'SELECT 1'
        );
        return result.rows.length > 0;
    } catch (err) {
        throw err;
    }
}

async function makeAppointment(data) {
    // Uses a parameterized query to avoid sql injection
    const sql = "SELECT * FROM cities WHERE LOWER(name) LIKE LOWER($1) LIMIT $2";
    const params = [(name + '%'), limit]
    try {
        const result =  await pool.query(sql, params);
        return result.rows;
      } catch (err) {
        throw err;
      }
}

module.exports = { healthcheck, makeAppointment}
