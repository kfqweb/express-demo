// 链接数据库
const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost', // 要连接的主机名
  user: 'root', // 要连接的数据库的用户名
  password: 'root', // 数据库密码
  database: 'test' // 数据库
})
module.exports = conn;