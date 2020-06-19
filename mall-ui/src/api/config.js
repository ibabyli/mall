
let localUrl = "http://192.168.43.8:8081/h5";
// 服务器接口地址
// let devUrl = "http://niushi168.com:8081/h5";
let devUrl = "http://open.niushi168.com/h5";
// 微信授权登陆url
// 如果是开发环境(本地环境)
if (process.env.NODE_ENV == "development") {
} else {  //生产环境
}
module.exports = {
  projectName: "电子商城",  //项目名称
};

