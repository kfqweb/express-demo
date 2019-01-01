const M_index = require('../models/M_index')
// 渲染列表页面
exports.showIndex = (req, res) => {
  // res.end('showCreate')
  M_index.getAllTopic((err, results) => {
    res.render('index.html', {
      user: req.session.user,
      topics: results
    })
  })
}