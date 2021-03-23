// pages/blog/blog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //控制底部弹出层是否显示
      modalShow:false,
      blogList:[]
  },
  //发布功能
  onPublish(){
   wx.getSetting({
      success:(res)=>{
        console.log(res)
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:(res)=>{
              this.onLoginSuccess({
                detail:res.userInfo
              })
            }
          })
        }else{
          this.setData({
            modalShow:true
          })
        } 
      }
   })
  },
  onLoginSuccess(event){
    //打印出用户的个人信息
   //console.log(event) 
    const detail=event.detail
    wx.navigateTo({
     url: `../blog-edit/blog-edit?nickName=${detail.nickName}&avatarUrl=${detail.avatarUrl}`,

    })
  },
  onLoginFail(){
    wx.showModal({
      title:'授权用户才能发布',
      content:' ',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'blogs',
      data:{
        $url:'list',
        start:0,
        count:10
      }
    }).then((res)=>{
      this.setData({
        blogList:this.data.blogList.concat(res.result)
      })
    })
  },
    
    _loadBlogList(){
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})