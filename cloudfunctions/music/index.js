// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter=require('tcb-router')
const rp=require('request-promise')
const { default: axios } = require('axios')
//const BASE_URL='https://apis.imooc.com/personalized?icode=A2B6A74D43014CBF'
const BASE_URL='https://apis.imooc.com'
const ICODE='icode=A2B6A74D43014CBF'
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const app=new TcbRouter({event})
  app.router('playlist',async(ctx,next)=>{
    ctx.body= await cloud.database().collection('playlist')
    .skip(event.start)
    .limit(event.count)
    .orderBy('createTime','desc')
    .get()
    .then((res)=>{
      return res
    })
  })
  app.router('musiclist',async(ctx,next)=>{
     const res=await axios.get(`${BASE_URL}/playlist/detail?id=${parseInt(event.playlistId)}&${ICODE}`)
      ctx.body=res.data
    })


  return app.serve()
}