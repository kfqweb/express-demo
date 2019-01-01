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

// 根据ID删除数据
exports.deleteById = (topicID, callback) => {
  conn.query('DELETE FROM `topics` where `id`= ?', topicID, (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, data)
  })
}

exports.showEdit = (topicID, callback) => {
  conn.query('SELECT * FROM `topics` where `id`= ?', topicID, (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, data)
  })
}

// 提交编辑
exports.edit = (data, callback) => {
  conn.query('UPDATE `topics` SET `title`=?, `content`=? WHERE `id`=?', [data.title,data.content, data.id], (err, data) => {
      if (err) {
        return callback(err)
      }
      callback(null, data)
    })
}