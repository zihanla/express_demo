// 导入express
import express from "express"
// 导入cors
import cors from "cors"

// 创建express实例
const app = express()
// 使用cors中间件
app.use(cors())
// 使用中间件解析json数据、urlencoded数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.json({
    msg: "hello zihan",
  })
})

// 启动并监听服务
app.listen(3007, () => {
  // 打印日志并把日志设为蓝色
  console.log("\x1b[34m%s\x1b[0m", "服务启动成功: http://127.0.0.1:3007")
})
