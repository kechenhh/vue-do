<template>
  <div>
    <div ref="chart" style="width: 400px; height: 300px"></div>
  </div>
</template>

<script>
import echarts from "echarts"

export default {
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      const chartDom = this.$refs.chart
      const myChart = echarts.init(chartDom)

      const data = [
        { name: "数据1", value: 2 },
        { name: "数据2", value: 8 },
      ]

      // 计算起始角度
      const [startAngle, endAngle] = this.calculateStartAngle(data)

      const option = {
        series: [
          {
            type: "pie",
            radius: "50%",
            startAngle: startAngle,
            endAngle: endAngle,
            data: data,
          },
        ],
      }

      myChart.setOption(option)
    },
    calculateStartAngle(data) {
      const totalValue = data.reduce((sum, item) => sum + item.value, 0)
      const startAngle1 = 180 // 数据1从横轴左侧交叉开始
      const startAngle2 = 0 // 数据2从横轴右侧交叉开始

      if (data.length >= 2) {
        const percentage1 = data[0].value / totalValue
        const percentage2 = data[1].value / totalValue
        const angleRange = 180 // 角度范围为180度

        const startAngle = startAngle1 + percentage1 * angleRange
        const endAngle = startAngle2 - percentage2 * angleRange

        return [startAngle, endAngle]
      } else if (data.length === 1) {
        // 只有一个数据时，将其放在左侧
        return [startAngle1, startAngle2]
      } else {
        // 没有数据时，返回默认的起始角度
        return [startAngle1, startAngle2]
      }
    },
  },
}
</script>

<style>
/* 可以根据需要添加样式 */
</style>
