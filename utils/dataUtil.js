function formatDate(timestamp) {
  timestamp = timestamp / 1000;
  console.log("当前时间戳为：" + timestamp);

  //获取当前时间  
  var n = timestamp * 1000;
  var date = new Date(n);
  //年  
  var Y = date.getFullYear();
  //月  
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  //日  
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  //时  
  var h = date.getHours();
  //分  
  var m = date.getMinutes();
  //秒  
  var s = date.getSeconds();
  var dataStr =   Y + M + D + " " + h + ":" + m + ":" + s
  return dataStr;
}
module.exports = {
  　　formatDate: formatDate
}