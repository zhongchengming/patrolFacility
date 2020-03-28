// pages/home/addInspection/addInspection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arraycj: ['美国', '中国', '巴西', '日本'],
    classType: ['甲班', '已班', '丙班', '日本'],
    carHouse:"",
    classHouse:""
  },
  btnclick1: function () {
    wx.navigateTo({
      url: '../inspectionDetail/inspectionDetail'
    })
  },
  btnclick2: function () {
    wx.navigateTo({
      url: '../inspectionDetail/inspectionDetail'
    })
  },
  btnclick3: function () {
    wx.navigateTo({
      url: '../inspectionDetail/inspectionDetail'
    })
  },
  btnclick4: function () {
    wx.navigateTo({
      url: '../inspectionDetail/inspectionDetail'
    })
  },
  currentCarHoser:function(){
    console.log("asa");
  },
  // 车间选择
  bindPickerChange: function (e) {
    this.setData({
      carHouse: e.detail.value
    })
  },
  classhose:function(e){
    this.setData({
      classHouse: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://zhongchengming.com:8080/login.do',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
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