<template>
  <div>
    <TableCon :tableData="tableData" :fieldList="fieldList" :stripe="true">
      <template #action="{ row }">
        <el-button type="text" @click="handleClick(row)">查看</el-button>
      </template>
    </TableCon>
  </div>
</template>

<script>
import TableCon from "./components/TableCon.vue"
export default {
  data() {
    return {
      tableData: [
        {
          CustAccNo: "1234567890",
          LwstKeepAmtUseFlag: "1",
          Amount: "1000",
          Remark: "无",
        },
        {
          CustAccNo: "0987654321",
          LwstKeepAmtUseFlag: "0",
          Amount: "2000",
          Remark: "无",
        },
        {
          CustAccNo: "1234567890",
          LwstKeepAmtUseFlag: "1",
          Amount: "1000",
          Remark: "无",
        },
      ],
      fieldList: [
        {
          prop: "CustAccNo",
          label: "账户账号",
        },
        // formatter 用于格式化内容
        {
          prop: "LwstKeepAmtUseFlag",
          label: "资金池留存金额使用标志",
          formatter: (val) => {
            return (
              {
                0: "否",
                1: "是",
              }[val] || val
            )
          },
        },
        {
          prop: "Amount",
          label: "金额",
          align: "right",
          sortable: true,
        },
        // slotName 用于插槽
        {
          prop: "action",
          label: "操作",
          slotName: "action",
        },
      ],
    }
  },
  components: { TableCon },
  methods: {
    handleClick(row) {
      console.log(row)
    },
  },
}
</script>

<style scoped></style>
