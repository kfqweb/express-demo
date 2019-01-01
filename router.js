// 0. 加载 express 
const express = require('express')

// 加载所有的处理函数模块
const index = require('./controllers/C_index')
const topic = require('./controllers/C_topic')
const user = require('./controllers/C_uesr')

// 1. 调用 express.Router() 创建一个路由实例
const router = express.Router()

// 2. 配置路由规则

// 首页路由
router
  .get('/', index.showIndex)

// 用户路由·
router
  .get('/signin', user.showSignin)
  .post('/signin', user.signin)
  .get('/signup', user.showSignup)
  .post('/signup', user.signup)
  .get('/signout', user.signout)

// 话题相关
router
  .get('/topic/create', topic.showCreate)
  .post('/topic/create', topic.create)
  .get('/topic/:topicID', topic.show)
  .get('/topic/:topicID/edit', topic.showEdit)
  .post('/topic/:topicID/edit', topic.edit)
  .post('/topic/:topicID/delete', topic.delete)

// 3. 导出路由对象
module.exports = router

// 4. 在 app.js 中通过 app.use(路由对象) 挂载使之生效
