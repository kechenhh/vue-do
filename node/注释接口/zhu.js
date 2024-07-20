const fs = require("fs")

// 读取文件内容
const filePath = "indexzhu.js" // 替换为你的文件路径
const fileContent = fs.readFileSync(filePath, "utf8")

// 获取前 10 行内容
const lines = fileContent.split("\n")
const firstLines = lines.slice(0, 10)

// 判断是否已注释并解开注释
let modified = false // 标记是否进行了修改

const modifiedLines = firstLines.map((line) => {
  if (line.includes("HomeView")) {
    if (line.trim().startsWith("//")) {
      // 已经注释，解开注释
      modified = true
      return line.replace("//", "")
    } else {
      // 未注释，进行注释
      modified = true
      return `// ${line}`
    }
  }
  return line
})

// 将剩下的行添加到修改后的行数组中
const remainingLines = lines.slice(10)
const finalLines = modifiedLines.concat(remainingLines)

// 将修改后的内容写回文件
if (modified) {
  const modifiedContent = finalLines.join("\n")
  fs.writeFileSync(filePath, modifiedContent, "utf8")
  console.log("修改完成")
} else {
  console.log("未做任何修改")
}
