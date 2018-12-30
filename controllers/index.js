exports.showIndex = (req,res) => {
  // res.end('showIndex')
  res.render('index.html', {
    // user: req.session.user // 把会话用户信息传递到模板中，模板就可以使用当前登陆的用户了
  })
}