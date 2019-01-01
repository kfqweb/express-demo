const conn = require('../controllers/db')

// 查询全部
exports.getAll = (callback) => {
  conn.query('SELECT * FROM `users`', (err, res, nextults) => {
    if (err) {
      return callback(err)
    }
    callback(null, res, nextults)
  })
}

// 查询邮箱
exports.getEmail = (email, callback) => {
  conn.query('SELECT * FROM `users` WHERE `email` = ?', email, (err, res, nextults) => {
    if (err) {
      return callback(err)
    }
    callback(null, res, nextults[0])
  })
}
// nickname 验证
exports.getNickname = (nickname, callback) => {
  conn.query('SELECT * FROM `users` WHERE `nickname` = ?', nickname, (err, res, nextults) => {
    if (err) {
      return callback(err)
    }
    callback(null, res, nextults[0])
  })
}

// 插入数据
exports.create = (user, callback) => {
  conn.query('INSERT INTO `users` SET ?', user, (err, res, nextults) => {
    if (err) {
      return callback(err)
    }
    callback(null, res, nextults)
  }
  )
}
