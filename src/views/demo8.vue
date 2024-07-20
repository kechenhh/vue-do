<template>
  <div>
    <el-input v-model="ques"></el-input>
    <el-button @click="send">发送</el-button>
    {{ an }}
  </div>
</template>

<script>
// "/gpt": {
//   target: "http://localhost:8085", // 要跨域的域名
//   changeOrigin: true, // 是否开启跨域
//   pathRewrite: {
//     //重写路径
//     "^/gpt": "", /
//   },
// },
import axios from "axios"
export default {
  props: {},
  data() {
    return {
      ques: "",
      an: "",
    }
  },
  methods: {
    send() {
      try {
        axios({
          method: "post",
          url: "/gpt/getAnswer",
          data: {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: this.ques }],
          },
        })
          .then((res) => {
            console.log(res)
            this.an = res.data.choices[0].message.content
          })
          .catch(err)
      } catch (error) {}
    },
  },
  components: {},
}
</script>

<style scoped lang="less"></style>
