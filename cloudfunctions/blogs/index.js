// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})
//引入tcb-router
const TcbRouter = require('tcb-router')

//获取数据库的引用
const db = cloud.database()
//获取对blog集合的引用
const blogCollection = db.collection('blog')


// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  })

  //list路由，用来查询云数据库中名为blog的collection
  app.router('list', async (ctx, next) => { //別忘了async和下一行的await
    let blogList = await blogCollection
      .skip(event.start)
      .limit(event.count)
      .orderBy('createTime', 'desc') //以创建时间的降序取值
      .get()
      .then((res) => {
        return res.data
      })
    ctx.body = blogList //返回取到的值
  })

  return app.serve()

}

