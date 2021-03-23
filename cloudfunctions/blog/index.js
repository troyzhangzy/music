// 云函数入口文件
import { init, DYNAMIC_CURRENT_ENV, database } from 'wx-server-sdk'

init({
  env: DYNAMIC_CURRENT_ENV
})

import TcbRouter from 'tcb-router'
const db=database()

const blogCollection = db.collection('blog')


// 云函数入口函数
export async function main(event, context){
  const app=new TcbRouter({
      event
  })
   app.router('list', async(ctx,next)=> {

    //
    ctx.body=await database().collection('blog').skip(0)
    .limit(10)
    .orderBy('createTime','desc')
    .get().then((res)=>{
      return res.data
    })
    
  })
  return app.serve
}

