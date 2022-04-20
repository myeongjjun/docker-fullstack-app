const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'myeong',
    database: 'myapp',
    port:3306
});
exports.pool = pool;