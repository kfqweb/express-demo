// 引入 express
const express = require('express')
// 引入 请求体处理 模块
const bodyParser = require('body-parser')
// 引入 处理 session 模块
const session = require('express-session')
// 引入 mysql-session 模块
const MySQLStore = require('express-mysql-session')(session)
// 引入 路由
const router = require('./router')
// 配置数据库

// 数据库信息
const options = {
  // 域名
  host: 'localhost',
  // 端口
  port: 3306,
  // 用户名
  user: 'root',
  // 密码
  password: 'root',
  // 库名称
  database: 'test'
}
// sessionStore 使用数据库
const sessionStore = new MySQLStore(options)

// 开启 experss
const app = express()

// 配置 express-mysql-session 
// 只要配置了该插件，则在后续请求的任何处理函数中都可以使用 
//    req.session 来访问或者设置 Session 数据了
app.use(session({
  key: "connect.sid", // 配置 Cookie 的名字，默认就是 connect.sid
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: sessionStore // 将 Session 数据存储到数据库中（默认是内存存储）
}))

// 1. 配置模板引擎
// 2. 渲染页面
// 3. 开放静态资源
// 4. 下载第三方包
//     bootstrap@3.3.7
//     jquery
app.use('/public', express.static('./public/'))
app.use('/node_modules', express.static('./node_modules/'))

// 配置 body-parser 解析表单 POST 请求体
// 只有配置了该插件，就可以在请求处理函数中使用 req.body 来访问请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 配置使用 art-template 模板引擎
app.engine('html', require('express-art-template'))

// 导入路由,一定要在最后面，要不然会导致依赖项出现问题，
// 比如 body 模快配置出现错误
app.use(router)

app.listen(3000, () => console.log('running 3000 prot.....'))

