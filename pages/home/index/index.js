// pages/statistics/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headHeight:90
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  onPageScroll: function (ev) {

     //Math.max 数组中返回最大值
    let offset = Math.abs(ev.scrollTop)+90;
    console.log("前的="+Math.abs(offset))
    this.setData({
      headHeight: offset
    });
    console.log("计算后的="+Math.abs(headHeight))
  }
})