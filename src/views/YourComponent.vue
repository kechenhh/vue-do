<template>
  <div>
    <ChIntro></ChIntro>
  </div>
</template>

<script>
import Vue from "vue"
import ChIntro from "./components/ChIntro.vue"
import compiler from "vue-template-compiler"

export default {
  components: {
    ChIntro,
  },
  mounted() {
    const compiled = compiler.compile(this.$options.template)
    const vm = new Vue({
      render: compiled.render,
      staticRenderFns: compiled.staticRenderFns,
    })

    vm.$mount()
    const html = vm.$el.outerHTML
    console.log(html, "gr") // 输出 HTML 字符串
  },
}
</script>
