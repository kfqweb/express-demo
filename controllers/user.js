// 链接数据库
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost', // 要连接的主机名
  user: 'root', // 要连接的数据库的用户名
  password: 'root', // 数据库密码
  database: 'test' // 数据库
})

exports.showSignin = (req, res) => {
  res.end('showSignin')
}

exports.signin = (req, res) => {
  res.end('signin')
}

exports.showSignup = (req, res) => {
  // res.end('showSignup')
  res.render('signup.html')
}

exports.signup = (req, res) => {
  // res.end('signup')
  // 1. 接收获取客户端提交的表单数据
  //    配置 body-parser 插件用来解析获取表单 POST 请求体数据
  const body = req.body
  // 2. 数据验证
  //    普通数据校验，例如数据有没有，格式是否正确
  //    业务数据校验，例如校验用户名是否被占用
  //    这里校验邮箱和昵称是否被占用
  // connection.query('SQL语句字符串',['数据'],(err,data)=>{// 回调函数})
}

exports.signout = (req, res) => {
  res.end('signout')
}
