const express = require("express")
const app = express()
const port = 3000 // 设置接口监听的端口号

// 解析 JSON 请求体
app.use(express.json())

// 示例接口：接收 POST 请求并返回接收到的参数
app.post("/api/example", (req, res) => {
  const data = req.body // 获取请求体中的参数
  let sub = {
    list: data.List.slice(0, 3),
  }
  res.json(sub)
})

// 启动服务器，监听指定端口
app.listen(port, () => {
  console.log(`服务器正在监听端口 ${port}`)
})
