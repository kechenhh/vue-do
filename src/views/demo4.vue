<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <el-button @click="handleIsEditOrder">编辑展示顺序</el-button>
      <div v-if="isEditOrder">
        <el-button @click="handleCancelSort">取消</el-button>
        <el-button type="primary" @click="handleSaveSort">保存</el-button>
      </div>
    </div>
    <el-table v-if="isShowTable" :data="tableData">
      <el-table-column prop="showOrder" label="序号"></el-table-column>
      <el-table-column prop="src" label="图片">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from "./Sortable"
export default {
  name: "banner",
  data() {
    return {
      tableData: [
        { name: "4234" },
        { name: "feaw" },
        { name: "423fawef4" },
        { name: "fewaf" },
      ],

      isShowTable: true,
      isEditOrder: false,
      sortable: null, // 拖拽对象
      sortData: [], // 拖拽数据
    }
  },
  mounted() {
    this.initSortable()
  },
  methods: {
    // 初始化拖拽
    initSortable() {
      this.sortData = [...this.tableData]
      const el = document.querySelector(".el-table__body-wrapper tbody")
      //创建拖拽对象
      this.sortable = Sortable.create(el, {
        sort: true, //是否可进行拖拽排序
        animation: 150,
        //拖拽完成，移除拖拽之前的位置上的元素，在拖拽之后的位置上添加拖拽元素
        onEnd: ({ newIndex, oldIndex }) => {
          const val = this.sortData[oldIndex]
          this.sortData.splice(oldIndex, 1)
          this.sortData.splice(newIndex, 0, val)
        },
      })
    },
    // 编辑展示顺序
    handleIsEditOrder() {
      this.isEditOrder = true
      this.sortable.options.sort = true
    },
    // 取消拖拽顺序
    handleCancelSort() {
      // 使table先隐藏，再显示，table将恢复拖拽之前的样式
      this.isShowTable = false
      setTimeout(() => {
        this.isShowTable = true
        // 必须延时，否则重新初始化的sortable无法拖拽
        setTimeout(() => {
          this.isEditOrder = false
          this.sortable.options.sort = false
          this.initSortable()
        }, 100)
      }, 100)
    },
    // 保存拖拽顺序
    async handleSaveSort() {
      let res = await editBannerOrder(this.sortData)
      if (res.code === 0) {
        // 使table先隐藏，再显示，否则table将无法拖拽
        this.isShowTable = false
        setTimeout(() => {
          this.isShowTable = true
          this.isEditOrder = false
          this.getList()
        }, 100)
      }
    },
  },
}
</script>
