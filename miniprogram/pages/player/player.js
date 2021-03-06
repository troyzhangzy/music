// pages/player/player.js
let musiclist=[]
let nowPlayingIndex=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picURL:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    nowPlayingIndex=options.index
    musiclist =wx.getStorageSync('musiclist')
    this._loadMusicDetail()
  },
  _loadMusicDetail(){
    let music=musiclist[nowPlayingIndex]
    console.log(music)  
    //we.setNavigationBarTitle是用来设置页面顶部title
    wx.setNavigationBarTitle({
      title: music.name,
    })
    this.setData({
      picURL:music.al.picUrl
    })
  }
  ,


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