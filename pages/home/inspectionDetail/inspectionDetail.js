// pages/home/inspectionDetail/inspectionDetail.js
Page({

  /**
   * 页面的初始数据00b4af
   */
  data: {
    show:"none",
    colorList: [{ "color": "white", "textColor": "rgb(107, 107, 107)" }, { "color": "white", "textColor": "rgb(107, 107, 107)" }, { "color": "white", "textColor": "rgb(107, 107, 107)" }],
    checkDataList:[],
    myindex:-1
    
  },
  /**
   * 点击是
   * 1.slectType 0【是】选中  2.myindex
   */
  btnclick1: function (e) {
   let list =  this.data.checkDataList;
  
   //异常1 未异常0
    let oldDic = list[e.currentTarget.dataset.myindex];
    oldDic["slectType"] = "0"

    list[e.currentTarget.dataset.myindex] = oldDic;
    this.setData({
      checkDataList: list
    })
  },
  /**
   * 点击否
   *  slectType 1【否】选中
   */
  btnclick2: function (e) {

    let list = this.data.checkDataList;

    //异常1 未异常0
    let oldDic = list[e.currentTarget.dataset.myindex];
    oldDic["slectType"] = "1"

    list[e.currentTarget.dataset.myindex] = oldDic;
    this.setData({
      checkDataList: list
    })
  },
  solveState:function(e){
    let colorList = [{ "color": "white", "textColor": "rgb(107, 107, 107)" }, { "color": "white", "textColor": "rgb(107, 107, 107)" }, { "color": "white", "textColor": "rgb(107, 107, 107)" }]
    colorList[e.currentTarget.dataset.index] = { "color": "#00b4af","textColor":"white"}
    this.setData({
      colorList: colorList,
    }); 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let checkPj = [{ "title": "反应器、泵类、研磨机、卷绕头", "select": "0" }, { "title": "并丝、螺旋丝、蛛网丝、加捻不良、应力异常", "select": "0"  }, { "title": "PTMG MDI DMAC 添加剂、油剂", "select": "0" }];
    this.setData({
      checkDataList: checkPj,
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

  }
})