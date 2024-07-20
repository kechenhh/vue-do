<template>
  <div>
    <div class="chart-wapper height-500 step_1">
      <el-button @click="getList">111111111</el-button>
    </div>
    <!-- <ChIntro></ChIntro> -->
    <div class="chart-wapper height-500" id="step_2">
      <div class="box-container">2222222</div>
    </div>
  </div>
</template>

<script>
import introJs from "intro.js"
import "intro.js/introjs.css"
import YourComponent from "./YourComponent.vue"
export default {
  components: { YourComponent },
  props: {},
  data() {
    return {
      imgPng: "",
    }
  },
  computed: {},
  created() {},

  mounted() {
    console.log(this.$createElement)

    this.$nextTick(() => {
      this.setGuide()
    })
  },
  methods: {
    getList() {
      // alert("000")
      const dialog = this.$createElement(
        "el-dialog",
        {
          props: {
            title: "Intro.js 引导",
            visible: true,
            width: "50%",
          },
        },
        [this.$createElement("el-button", "按钮内容")]
      )
      console.log(dialog)
      return dialog
    },
    setGuide() {
      // 通过id或者class绑定步骤，也可以直接定死在div上面
      let steps = [
        {
          element: ".step_1",
          intro: `<div>
                <h3>Intro.js 引导</h3>
                <p>这是一段包含复杂元素的提示文本。</p>
                <ul>
                  <li>列表项 1</li>
                  <li>列表项 2</li>
                  <li>列表项 3</li>
                </ul>
                <div>
                  <img src="path/to/image.jpg" alt="图片">
                </div>
              </div>`,
          position: "right",
        },
      ]

      //引入intro.js
      var introJS = introJs
      introJS()
        .setOptions({
          // nextLabel: "下一个", // 下一个按钮文字
          // prevLabel: "上一个", // 上一个按钮文字
          // skipLabel: "跳过", // 跳过按钮文字
          doneLabel: "跳过引导", // 完成按钮文字

          // nextLabel: "下一步",
          hidePrev: true, // 在第一步中是否隐藏上一个按钮
          hideNext: false, // 在最后一步中是否隐藏下一个按钮
          exitOnOverlayClick: true, // 点击叠加层时是否退出介绍
          showStepNumbers: false, // 是否显示红色圆圈的步骤编号
          tooltipClass: "customTooltip",
          showBullets: false, // 是否显示面板指示点
          steps: steps,
        })
        .start()
      // introJS()
      //   .setOptions({

      //     // 我给看的效果图是英文的（默认英文），这里是更换成中文
      //     prevLabel: "上一步",
      //     nextLabel: "下一步",
      //     skipLabel: "跳过",
      //     doneLabel: "完成",
      //     // steps步骤，可以写个工具类保存起来
      //     steps: steps,
      //   })
      //   .oncomplete(() => {
      //     // 需要注意的是，这里用了箭头函数
      //     // 点击结束按钮后执行的事件
      //   })
      //   .onexit(() => {
      //     // 点击跳过按钮后执行的事件
      //   })
      //   .onbeforeexit(() => {
      //     // 确认完毕之后执行的事件
      //     // return confirm('Are you sure?')
      //   })
      //   .start()
    },
  },
}
</script>

<style>
/* .intro-class .introjs-tooltipbuttons {
  display: none;
} */
.customTooltip .introjs-tooltip-title {
  color: #0a41c9;
}
</style>
