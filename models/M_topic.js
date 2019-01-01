const conn = require('../controllers/db')
// 提交信息
exports.create = (body, callback) => {
  conn.query('INSERT INTO `topics` SET ?', body, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results)
  })
}
// 根据 ID 找到数据并返回
exports.showById = (topicID, callback) => {
  conn.query(
  `SELECT
      topics.*,
      (SELECT nickname FROM users WHERE id = topics.userId) as nickname
    FROM
      topics,
      users
    WHERE
      topics.id = ?`
    , topicID, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results)
    })
}