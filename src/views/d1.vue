<template>
  <el-table
    :data="tableData"
    :row-key="(row) => row.id"
    :default-sort="defaultSort"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55"
      :selectable="(row) => row.id !== selectedRowId"
    ></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column prop="gender" label="性别"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 1, name: "张三", age: 20, gender: "男" },
        { id: 2, name: "李四", age: 25, gender: "女" },
        { id: 3, name: "王五", age: 30, gender: "男" },
      ],
      selectedRowId: null, // 当前选中行的标识符
      defaultSort: { prop: "id", order: "ascending" },
    }
  },
  methods: {
    handleSelectionChange(selection) {
      if (selection.length > 0) {
        this.selectedRowId = selection[0].id // 选中第一个选项
      } else {
        this.selectedRowId = null // 取消选中
      }
    },
  },
}
</script>
