# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：
 
- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码
## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
##小程序云开发
1.app.js
默认传的是第一云环境  如果有2个环境需要制定环境 id
-env：表示环境 id  传入字符串形式的环境 ID 
- traceUser:是否在将用户访问记录到用户管理中，在控制台中可见
```
  wx.cloud.init({
        traceUser: true,
        env:"cloud-development-tvu8p"
      })
```
2.如何创建和上传云函数
- cloudfunctins点击右键创建nodejs云函数
-在自动生成的index.js里进行