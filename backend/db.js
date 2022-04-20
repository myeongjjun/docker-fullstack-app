const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "docker-fullstack-mydb.chivm7cb6gwi.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    password: "myeong77",
    database: "myapp",
    port: 3306
});
exports.pool = pool;