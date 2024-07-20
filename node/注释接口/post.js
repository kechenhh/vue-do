const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.json())
const filePath = "file.js"

app.post("/checkKeywords", (req, res) => {
  const keywords = req.body.keywords

  if (!keywords || !Array.isArray(keywords)) {
    return res.status(400).json({ error: "Invalid keywords" })
  }

  const result = checkKeywordsStatus(filePath, keywords)
  res.json(result)
})

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

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
