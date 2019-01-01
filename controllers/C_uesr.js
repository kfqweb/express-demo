const M_user = require('../models/M_user')

const moment = require('moment')

const md5 = require('md5')

// 引入 数据库模块
const conn = require('./db')

exports.showSignin = (req, res) => {
  res.render('signin.html')
}
// 登录
exports.signin = (req, res) => {
  const body = req.body
  // 验证邮箱和密码
  /* 
    1】错误有没有
    2】邮箱对不对
    3】密码对不对
    4】全对，则跳转页面
  */
  M_user.getEmail(body.email, (err, user) => {
    if (err) {
      return res.send({
        code: 500,
        message: err.message
      })
    }
    if (!user) {
      return res.send({
        code: 1,
        message: '邮箱不存在 You try-try-see！！！'
      })
    }
    if (md5(body.password) !== user.password) {
      return res.send({
        code: 2,
        message: '密码不对 You try-try-see！！！'
      })
    }
    // 将正确的用户信息存储在session中
    // 配置完 express-session 后就能使用 req.session 了
    // 将来要在 index.html中使用信息
    req.session.user = user
    // 登录成功
    res.send({
      code: 200,
      message: 'You are great！！！'
    })
  })
}

exports.showSignup = (req, res) => {
  // res.end('showSignup')
  res.render('signup.html')
}
// 注册
exports.signup = (req, res) => {
  const body = req.body
  // console.log(body);
  // 查看邮箱是否被占用
  M_user.getEmail(body.email, (err, user) => {
    // 是否出现错误
    if (err) {
      return res.send({
        code: 500,
        message: err.message
      })
    }
    if (user) {
      return res.send({
        code: 1,
        message: '邮箱已被占用了'
      })
    }
    // 验证昵称
    M_user.getNickname(body.nickname, (err, user) => {
      // 是否出现错误
      if (err) {
        return res.send({
          code: 500,
          message: err.message
        })
      }
      // 昵称是否被占用
      if (user) {
        return res.send({
          code: 1,
          message: '逆臣已被占用了'
        })
      }
      // 邮箱和昵称都校验没有问题了，可以注册了
      // 3. 当数据验证都通过之后，在数据库写入一条新的用户数据
      // 添加更新时间
      // moment 是一个专门处理时间的 JavaScript 库，这个库既可以在浏览器使用，也可以在 Node 中使用
      // JavaScript 被称之为全栈式语言
      // moment() 用来获取当前时间
      // format() 方法用来格式化输出
      body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
      body.password = md5(body.password)

      M_user.create(body, (err, user) => {
        if (err) {
          // 服务器异常，通知客户端
          return res.send({
            code: 500,
            message: err.message
          })
        }
        res.send({
          code: 200,
          message: '注册成功'
        })
      })
    })
  })
}

exports.signout = (req, res) => {
  res.send('signout')
}
