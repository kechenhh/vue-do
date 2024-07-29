<template>
  <div>
    <input type="file" @change="onFileChange" />
    <!-- <el-upload
      :on-change="handleChangePDF"
      :action="upAction"
      ref="upload"
      :limit="50"
      :multiple="true"
      :auto-upload="false"
      :file-list="pdfList"
      accept="application/pdf"
      :show-file-list="false"
      class="up-load-click"
    >
      <el-button
        style="height: 40px; width: 150px; margin-top: 0px"
        class="mainButtonBankgorund returnBtn"
        >预览</el-button
      >
    </el-upload>
    <el-button @click="uploadFileAxios">上传</el-button>
    <el-button @click="show">下载预览</el-button> -->

    <div v-if="pdf">
      <button @click="prevPage" :disabled="pageNum <= 1">Previous</button>
      <button @click="nextPage" :disabled="pageNum >= numPages">Next</button>
      <span>Page {{ pageNum }} of {{ numPages }}</span>
    </div>

    <canvas id="pdf-canvas"></canvas>
    <div v-if="renderError" class="error">{{ renderError }}</div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      pdfList: [],
      upAction: "",
      Uploaddata: {
        UserId: "",
        CifNo: "",
        ProdNo: "",
        BankId: "",
      },
      EcmIndexNo: "",
      file: null,
      pdf: null,
      pageNum: 1,
      numPages: 0,
      renderError: null,
      rendering: false,
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0]
      if (file && file.type === "application/pdf") {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.loadPDF(e.target.result)
        }
        reader.readAsArrayBuffer(file)
      } else {
        alert("Please upload a PDF file.")
      }
    },
    handleChangePDF(file, fileList) {
      this.pdfList = fileList
    },
    uploadFileAxios() {
      let fileList = this.pdfList
      let publicData = JSON.parse(window.sessionStorage.getItem("userInfo"))
      let formData = new FormData()
      formData.append("UserId", publicData.userId)
      formData.append("CifNo", publicData.cifNo)
      formData.append("ProdNo", "cc")
      formData.append("BankId", "ccc")
      fileList.forEach((item, index) => {
        formData.append(`UploadFile${index}`, item.raw)
      })
      formData.append("UploadIds", fileList.length)
      console.log(formData)
      axios({
        method: "post",
        url: "/eweb/xxx.do",
        data: formData,
      })
        .then((res) => {
          if (res.data._RejCode === "00000000") {
            console.log("🚀 ~ res:", res)
          } else {
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    show() {
      axios({
        method: "post",
        url: "/eweb/ccc.do",
        data: {
          ProdNo: "B010",
          UserId: window.sessionStorage.getItem("userId"),
          CifNo: JSON.parse(window.sessionStorage.getItem("userInfo")).cifNo,
          BankId: JSON.parse(window.sessionStorage.getItem("userInfo")).bankId,
          Download: "Download",
          EcmIndexNo: this.EcmIndexNo,
          DownloadFlag: "0",
        },
        responseType: "arraybuffer",
      }).then((res) => {
        let content = res.data
        // 渲染
        this.loadPDF(content)
      })
    },
    loadPDF(arrayBuffer) {
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      loadingTask.promise
        .then((pdf) => {
          this.pdf = pdf
          this.numPages = pdf.numPages
          this.pageNum = 1
          this.renderPage(this.pageNum)
        })
        .catch((reason) => {
          console.error(reason)
          this.renderError = "Error loading PDF: " + reason.message
        })
    },
    async renderPage(num) {
      if (this.rendering) {
        return
      }
      this.rendering = true
      this.renderError = null

      try {
        const page = await this.pdf.getPage(num)
        const scale = 1.5
        const viewport = page.getViewport({ scale })

        const canvas = document.getElementById("pdf-canvas")
        const context = canvas.getContext("2d")
        canvas.height = viewport.height
        canvas.width = viewport.width

        const renderContext = {
          canvasContext: context,
          viewport,
        }

        await page.render(renderContext).promise
      } catch (reason) {
        console.error(reason)
        this.renderError = "Error rendering page: " + reason.message
      } finally {
        this.rendering = false
      }
    },
    prevPage() {
      if (this.pageNum > 1) {
        this.pageNum--
        this.renderPage(this.pageNum)
      }
    },
    nextPage() {
      if (this.pageNum < this.numPages) {
        this.pageNum++
        this.renderPage(this.pageNum)
      }
    },
  },
}
</script>

<style>
canvas {
  border: 1px solid black;
  margin-top: 10px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
