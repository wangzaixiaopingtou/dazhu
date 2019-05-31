// pages/backuautio/backuautio.js
let app= getApp();
// 获取全局变量
console.log(app)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    musicflag: app.globalData.globalMusicFlag
  },
  initmusic(BackgroundAudioManager) {
    //初始化背景音乐
    //播放音乐
    BackgroundAudioManager.title = "我的音乐";
    //不支持本地的
    BackgroundAudioManager.src =
     " http://153.37.232.149/amobile.music.tc.qq.com/C400001aIgyZ14kzcQ.m4a?guid=540915665&vkey=7F78EF080D42D410A8BA52147EA2D47D0C894CD2BFAFDCBF6421CF37B8F6256ACC80E77B825A9451E239DB5E6861B248BD0108748C2FF30F&uin=0&fromtag=66"
    //初始化音乐时候因为是自动播放  所以先把文字设置成暂停
    // this.setData({
    //   playtext: '暂停'
    // });
  },
  playmusic() {
    let BackgroundAudioManager = wx.getBackgroundAudioManager();
    //创建了一个背景音乐的实例

    if (this.data.musicflag) {
      //音乐播放的时候
      this.initmusic(BackgroundAudioManager);
      // BackgroundAudioManager.pause();
      app.globalData.globalMusicFlag=false
      this.setData({
        musicflag: app.globalData.globalMusicFlag
      });
      //全局变量也要跟着改变
      // app.globalData.globalMusicFlag=false
    } else {
      // 音乐暂停的时候
      BackgroundAudioManager.pause();
      app.globalData.globalMusicFlag = true;
      this.setData({
        musicflag: app.globalData.globalMusicFlag
      });
      //全局变量也要跟着改变
      
    }
    // 自己写的播放与系统的播放同步
    // 监听系统背景音乐时间
    BackgroundAudioManager.onPlay(()=>{
      app.globalData.globalMusicFlag = false
      this.setData({
        musicflag: app.globalData.globalMusicFlag
      })
    })
    BackgroundAudioManager.onPause( ()=> {
      app.globalData.globalMusicFlag = true;
      this.setData({
        musicflag: app.globalData.globalMusicFlag
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 每次显示页面的时候重新把全局的音乐赋值给当前页面的musicflag
    this.setData({
    musicflag: app.globalData.globalMusicFlag
  })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
