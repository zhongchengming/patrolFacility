// pages/dealWith/dwIndex/dwIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let map = { "workerName": "后纺一期车间", "checkDate": "2020-03-20", "checkName": "李班长", "warn": "1", "type": "进行中" }
    let map2 = { "workerName": "后纺一期车K间", "checkDate": "2020-02-26", "checkName": "黄班长", "warn": "5", "type": "待处理" }
    let dayList1 = [map2];
    let dayList2 = [map,map2];

    let height = 110*dayList2.length;

    let dayMap1 = { "dayList": dayList1, "day": "01/20","dayCellHeiht":"110"};
    let dayMap2 = { "dayList": dayList2, "day": "01/16", "dayCellHeiht": height };

    let newDataList = [];
    newDataList.push(dayMap1)
    newDataList.push(dayMap2)
    this.setData({
      dataList: newDataList
    })
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