// 链接数据库
// const mysql = require('mysql')
const moment = require('moment')

// 引入 数据库模块

const conn = require('./db')
// const conn = mysql.createConnection({
//   host: 'localhost', // 要连接的主机名
//   user: 'root', // 要连接的数据库的用户名
//   password: 'root', // 数据库密码
//   database: 'test' // 数据库
// })

exports.showSignin = (req, res, next) => {
  res.render('signin.html')
}

exports.signin = (req, res, next) => {
  const body = req.body
  console.log(body);
  res.end('signin')
}

exports.showSignup = (req, res, next) => {
  // res.end('showSignup')
  res.render('signup.html')
}

exports.signup = (req, res, next) => {
  // res.end('signup')
  // 1. 接收获取客户端提交的表单数据
  //    配置 body-parser 插件用来解析获取表单 POST 请求体数据
  const body = req.body
  // 2. 数据验证
  //    普通数据校验，例如数据有没有，格式是否正确
  //    业务数据校验，例如校验用户名是否被占用
  //    这里校验邮箱和昵称是否被占用
  // conn.query('SQL语句字符串',['数据'],(err,data)=>{// 回调函数})
  console.log(body);
  // 查看邮箱是否被占用
  /*   conn.query('SELECT * FROM `users` WHERE `email` = ?', [body.email], (err, res, nextults) => {
      if (err) {
        return res.send({
          code: 500,
          message: err.message // 把错误对象中的错误消息发送给客户端
        })
      }
      // 如果查出了数据就是注册过了。
      if (results[0]) {
        return res.send({
          code: 1,
          message: '邮箱已被占用了'
        })
      }
      // 查看 昵称是否被占用
      conn.query('SELECT * FROM `users` WHERE `nickname` = ?', [body.nickname], (err, res, nextults) => {
        if (err) {
          return res.send({
            code: 500,
            message: err.message // 把错误对象中的错误消息发送给客户端
          })
        }
        if (results[0]) {
          return res.send({
            code: 1,
            message: '昵称已被占用了'
          })
        }
      })
      // 昵称和邮箱没问题就可以开始注册了
      // 时间处理
      // 添加更新时间
      // moment 是一个专门处理时间的 JavaScript 库，这个库既可以在浏览器使用，也可以在 Node 中使用
      // JavaScript 被称之为全栈式语言
      // moment() 用来获取当前时间
      // format() 方法用来格式化输出
      body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
      // 注册
      conn.query('INSERT INTO `users` SET ?', body, (err, res, nextults) => {
        if (err) {
          return res.send({
            code: 500,
            message: err.message // 把错误对象中的错误消息发送给客户端
          })
        }
        res.send({
          code: 200,
          message: '注册成功'
        })
      })
    }) */
    
}

exports.signout = (req, res, next) => {
  res.send('signout')
}
