import "core-js/stable"
import "regenerator-runtime/runtime"
import Vue from "vue"
import App from "./App.vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

Vue.use(ElementUI)

import ECharts from "vue-echarts/components/ECharts.vue"
import "echarts/lib/chart/bar"
import "echarts/lib/chart/line"
import "echarts/lib/component/tooltip"
Vue.component("chart", ECharts)

import _ from "lodash"
Vue.prototype._ = _

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
