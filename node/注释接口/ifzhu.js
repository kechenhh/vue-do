const fs = require("fs")

function checkKeywordsStatus(filePath, keywords) {
  const fileContent = fs.readFileSync(filePath, "utf8")
  const lines = fileContent.split("\n")
  const result = []

  for (let i = 0; i < keywords.length; i++) {
    const keyword = keywords[i]
    let keywordStatus = false

    for (let j = 0; j < lines.length; j++) {
      const line = lines[j]
      const trimmedLine = line.trim()

      if (trimmedLine.includes(keyword)) {
        if (trimmedLine.startsWith("//") || trimmedLine.startsWith("/*")) {
          keywordStatus = true // 注释状态为 true
        }
        break // 找到关键字后，停止遍历
      }
    }

    result.push({ name: keyword, status: keywordStatus })
  }

  return result
}

const filePath = "file.js"
const keywords = ["HomeView", "Homebaby"]

const keywordsStatus = checkKeywordsStatus(filePath, keywords)

console.log(keywordsStatus)
