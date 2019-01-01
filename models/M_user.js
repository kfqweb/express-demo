const conn = require('../controllers/db')

// 查询全部
exports.getAll = (callback) => {
  conn.query('SELECT * FROM `users`', (err, results) => {
    if (err) {
      return callback(err)
    }
    callback(null, results)
  })
}

// 查询邮箱
exports.getEmail = (email, callback) => {
  conn.query('SELECT * FROM `users` WHERE `email` = ?', email, (err, results) => {
    if (err) {
      return callback(err)
    }
    callback(null, results[0])
  })
}
// nickname 验证
exports.getNickname = (nickname, callback) => {
  conn.query('SELECT * FROM `users` WHERE `nickname` = ?', nickname, (err, results) => {
    if (err) {
      return callback(err)
    }
    callback(null, results[0])
  })
}

// 插入数据
exports.create = (user, callback) => {
  conn.query('INSERT INTO `users` SET ?', user, (err, results) => {
    if (err) {
      return callback(err)
    }
    callback(null, results)
  }
  )
}
