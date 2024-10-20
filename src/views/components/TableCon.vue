<template>
  <el-table :data="tableData" v-bind="$attrs">
    <el-table-column
      v-for="(item, index) in fieldList"
      :key="index"
      v-bind="$attrs"
      :label="item.label"
      :prop="item.prop"
      :sortable="item.sortable || false"
      :align="item.align || 'center'"
      :min-width="item.width || '120'"
    >
      <template slot-scope="scope">
        <!-- 格式化类型 -->
        <span v-if="item.formatter">{{
          item.formatter(scope.row[item.prop], scope.row)
        }}</span>
        <!-- 插槽类型 -->
        <slot v-else-if="item.slotName" :name="item.slotName" :row="scope.row">
        </slot>

        <span v-else>{{ scope.row[item.prop] }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    fieldList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
