const M_topic = require('../models/M_topic')

const moment = require('moment')

// 渲染列表页面
exports.showCreate = (req, res, next) => {
  // res.end('showCreate')
  res.render('topic/create.html', {
    user: req.session.user
  })
}
// 提交信息
exports.create = (req, res, next) => {
  // res.end('create')
  const body = req.body

  body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  body.userId = req.session.user.id
  M_topic.create(body, (err, data) => {
    if (err) {
      return next(err)
    }
    res.send({
      code: 200,
      message: '发布成功'
    })
  })
}
// 显示
exports.show = (req, res, next) => {
  const { topicID } = req.params
  // console.log(topicID);
  M_topic.showById(topicID, (err, data) => {
    if (err) {
      return next(err)
    }
    res.render('topic/show.html', {
      user: req.session.user.id,
      data: data[0]
    })
  })

}
// 显示编辑
exports.showEdit = (req, res, next) => {
  const { topicID } = req.params

  M_topic.showEdit(topicID, (err, data) => {
    if (err) {
      return next(err)
    }
    res.render('topic/edit.html', {
      topic: data[0],
      user: req.session.user
    })
  })

}


// 删除
exports.delete = (req, res, next) => {
  const { topicID } = req.params
  M_topic.deleteById(topicID, (err, data) => {
    if (err) {
      return next(err)
    }
    // res.redirect('/')
    res.send({
      code: 200
    })
  })
}


// 编辑提交
exports.edit = (req, res, next) => {
  const body = req.body1
  M_topic.edit(body, next, (err, data) => {
    res.send({
      code: 200,
      message: '成了！！！'
    })
  })
}
