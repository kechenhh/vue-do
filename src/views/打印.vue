<template>
  <div>
    <!-- ref绑定打印dom节点名称 -->
    <div id="print_area" class="printAsset">
      <table class="assetPrintTable">
        <!-- 重点--一定要写thead -->
        <thead>
          <!-- <img src="./logo.png" alt="" /> -->

          <h3 style="background-image: url('logo.png')">测试</h3>
          <tr>
            <th>资产编号</th>
            <th>资产名称</th>
            <th>Epc</th>
            <th>规格型号</th>
            <th>使用期限</th>
            <th>存放区域</th>
            <th>资产原值</th>
            <th>登记时间</th>
            <th>是否已发卡</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataList" :key="item.id">
            <td>{{ item.number }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.epc }}</td>
            <td>{{ item.specifications }}</td>
            <td>{{ item.usedMonth }}</td>
            <td>{{ item.fullName }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.registerTime }}</td>
            <td>
              <span v-if="item.epcBind == '0'">未发卡</span>
              <span v-else-if="item.epcBind == '1'">已发卡</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-button @click="printHTML">打印</el-button>
  </div>
</template>

<script>
import print from "print-js"
export default {
  props: {},
  data() {
    return {
      dataList: [
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
        { number: "111" },
      ],
    }
  },

  methods: {
    printHTML() {
      print({
        printable: "print_area",
        type: "html",
        scanStyles: false,
        css: "./print.css",
      })
    },
  },
}
</script>

<style lang="scss">
// 媒体查询print，只在打印和打印预览的时候生效
@media print {
  .printAsset {
    width: 100%;
    // 表格基本样式
    .assetPrintTable {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      border-left: 1px solid #e4e7ed;
      border-top: 1px solid #e4e7ed;
      // 实现分页，行不撕裂的关键
      tr {
        page-break-inside: avoid;
      }
      // 单元格样式
      td,
      th {
        border-right: 1px solid #1e3f81;
        border-bottom: 1px solid #1b4aa8;
        padding: 10px;
        text-align: center;
      }
      //表头添加背景色
      th {
        background-color: #095ddb;
      }
    }
  }
}
</style>
