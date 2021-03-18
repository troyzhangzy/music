const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    musiclist: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
      playingID:-1
  },
 

  /**
   * 组件的方法列表
   */
  methods: {
      onSelect(event){
        //事件源，事件处理函数，事件对象，事件类型

     //   console.log(this.properties.musiclist)
        console.log(event.currentTarget.dataset.musicid)
        const ds=event.currentTarget.dataset
        const musicid=event.currentTarget.dataset.musicid
        this.setData({
          playingID:event.currentTarget.dataset.musicid
        }),
        wx.navigateTo({
          url: `../../pages/player/player?musicid=${musicid}&index=${ds.index}`,
        })
      }
  }
})