const M_index = require('../models/M_index')
// 渲染列表页面
exports.showIndex = (req, res, next) => {
  // res.end('showCreate')
  M_index.getAllTopic((err, results) => {
    if(err){
      return next(err)
    }
    res.render('index.html', {
      user: req.session.user,
      topics: results
    })
  })
}