// pages/statistics/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headeight:90,
    offset:0,
    dataList:[],
    windowHeight:0,
    contenth:0,
    isScroll:""
  },
  scroll: function (ev) {
    // let offset = 0;
    // if (ev.detail.scrollTop > 0) {
    //   offset = - ev.detail.scrollTop-10;
    // } else {
    //   offset = 0;
    // }
    // let newh = this.data.contenth;
    // newh += Math.abs(offset)
    // this.setData({
    //   offset: offset,
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let map = {"workerName":"后纺一期车间","checkDate":"2020-03-20","checkName":"李班长","warn":"1","type":"甲班-白班"}
    let map2 = { "workerName": "后纺一期车K间", "checkDate": "2020-02-26", "checkName": "黄班长", "warn": "5", "type": "已班-早班" }
    let newDataList = [];
    newDataList.push(map);
    newDataList.push(map2);
    newDataList.push(map);
    newDataList.push(map2);
    this.setData({
      dataList: newDataList
    })
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        let h = res.windowHeight-150
        that.setData({
          windowHeight: res.windowHeight,
          contenth:h
        })
      }
    });
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

  },
})