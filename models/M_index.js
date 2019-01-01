const conn = require('../controllers/db')

// 查询所有的数据
exports.getAllTopic = (callback) => {
  conn.query('SELECT *FROM `to153pics` ORDER BY `createdAt` DESC', (err, results) => {
    if (err) {
      return callback(err)
    }
    
    callback(null,results)
  })
}