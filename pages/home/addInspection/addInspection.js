
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cjList: [{ "name": "力恒甲产已车间", "id": "23", "value": "23" }, { "name": "力恒甲产已车间", "id": "23", "value": "23" }, { "name": "力恒甲产已车间", "id": "23", "value": "23" }, { "name": "力恒甲产已车间", "id": "23", "value": "23" }],
    bbList: [{ "name": "甲班白班", "id": "23", "value": "23" }, { "name": "甲班夜班", "id": "23", "value": "23" }, { "name": "已班白班", "id": "23", "value": "23" }, { "name": "已班夜班", "id": "23", "value": "23" }],
    cjIndex:"",
    bbIndex:"",
    name:"",
    disabled:false
  },
  btnclick1: function () {
    var myThis = this
    if (this.isfinish()&&this.data.disabled==false){
      wx.showModal({
        title: '提示',
        content: '当前车间、班别是否填写正确',
        cancelText: "重填",
        confirmText: "正确",
        confirmColor: "#00b4af",
        success: function (res) {
          
          if (res.confirm) {
            myThis.setData({
              disabled: true
            })
            let str = JSON.stringify({"name":this.data.name,"":"","":""});
            wx.navigateTo({
              url: '../inspectionDetail/inspectionDetail'
            })
          }
        }
      })
    } else if (this.isfinish()){
      wx.navigateTo({
        url: '../inspectionDetail/inspectionDetail'
      }) 
    }
  },
  btnclick2: function () {
    var myThis = this
    if (this.isfinish() && this.data.disabled == false) {
      wx.showModal({
        title: '提示',
        content: '当前车间、班别是否填写正确',
        cancelText: "重填",
        confirmText: "正确",
        confirmColor: "#00b4af",
        success: function (res) {
          if (res.confirm) {
            myThis.setData({
              disabled: true
            })
            wx.navigateTo({
              url: '../inspectionDetail/inspectionDetail'
            })
          }
        }
      })
    } else if (this.isfinish()) {
      wx.navigateTo({
        url: '../inspectionDetail/inspectionDetail'
      })
    }
  },
  btnclick3: function () {
    var myThis = this
    if (this.isfinish() && this.data.disabled == false) {
      wx.showModal({
        title: '提示',
        content: '当前车间、班别是否填写正确',
        cancelText: "重填",
        confirmText: "正确",
        confirmColor: "#00b4af",
        success: function (res) {
          if (res.confirm) {
            myThis.setData({
              disabled: true
            })
            wx.navigateTo({
              url: '../inspectionDetail/inspectionDetail'
            })
          }
        }
      })
    } else if (this.isfinish()) {
      wx.navigateTo({
        url: '../inspectionDetail/inspectionDetail'
      })
    }
  },
  btnclick4: function () {
    var myThis = this
    if (this.isfinish() && this.data.disabled == false) {
      wx.showModal({
        title: '提示',
        content: '当前车间、班别是否填写正确',
        cancelText: "重填",
        confirmText: "正确",
        confirmColor: "#00b4af",
        success: function (res) {
          if (res.confirm) {
            myThis.setData({
              disabled: true
            })
            wx.navigateTo({
              url: '../inspectionDetail/inspectionDetail'
            })
          }
        }
      })
    } else if (this.isfinish()) {
      wx.navigateTo({
        url: '../inspectionDetail/inspectionDetail'
      })
    }
  },
  // 车间选择
  bindPickerChange: function (e) {
    this.setData({
      cjIndex: e.detail.value
    })
  },
  // 获取姓名
  getName:function(e){
    this.setData({
      name: e.detail.value
    })
  },
// 获取班别
  classhose:function(e){
    this.setData({
      bbIndex: e.detail.value
    })
  },
  /**
   * 判断头部是否填写完毕
   */
  isfinish: function () {
    let cjindex = this.data.cjIndex;
    let name = this.data.name;
    let message = "";
    let istg  = true;
    if (name.length == 0) {
      message = "请填写姓名"
      istg = false;
    } else if (cjindex.length==0){
      message = "请选择当前车间";
      istg = false;
    } else if (this.data.bbIndex.length==0) {
      message = "请选择班别";
      istg = false;
    }
    if(istg==false){
      wx.showToast({
        title: message,
        icon: 'none',
        duration: 1000
      })
      return false;
    }else{
      return true;
    }
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