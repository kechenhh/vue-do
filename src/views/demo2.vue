<template>
  <el-form
    :model="orderDetailForm"
    ref="orderDetailForm"
    size="small"
    :rules="orderDetailRule"
    align="center"
  >
    <el-table
      :data="orderDetailForm.orderData"
      style="width: 100%"
      ref="materialTable"
      @selection-change="handleSelectionChange"
    >
      <!-- <el-table-column type="selection" width="55" :reserve-selection="true">
      </el-table-column> -->
      <!-- 性别 -->
      <template></template>
      <el-table-column prop="sex" label="性别" align="center" width="180">
        <template slot-scope="scope">
          <el-form-item
            :prop="'orderData.' + scope.$index + '.sex'"
            :rules="orderDetailRule.sex"
          >
            <el-radio-group
              v-model="scope.row.sex"
              @change="sexChange(scope.row, scope.$index)"
            >
              <el-radio :label="0">man</el-radio>
              <el-radio :label="1">woman</el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
      </el-table-column>
      <!-- 卖出数量 -->
      <el-table-column
        prop="soldNumber"
        label="卖出数量"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <el-form-item
            :prop="'orderData.' + scope.$index + '.soldNumber'"
            :rules="orderDetailRule.soldNumber"
          >
            <el-input
              v-model="scope.row.soldNumber"
              placeholder="请输入"
              v-if="isShow(scope.row, scope.$index)"
            ></el-input>
            <div v-else>
              {{ scope.row.soldNumber }}
            </div>
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="onSubmit('orderDetailForm')"
      >立即创建</el-button
    >
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      orderDetailForm: {
        orderData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            soldNumber: "12",
            sex: 0,
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
            soldNumber: "2",
            sex: "",
          },
        ],
      },
      rows: [],
      bakList: [],
      orderDetailRule: {
        soldNumber: [{ required: true, message: "请输入卖出数量" }],
        sex: [{ required: true, message: "选择性别", trigger: "change" }],
      },
    }
  },
  mounted() {
    this.bakList = JSON.parse(JSON.stringify(this.orderDetailForm.orderData))
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val)
      this.rows = val
    },
    isShow(row) {
      if (row.sex == "0") {
        return true
      }
    },
    sexChange(row, index) {
      console.log(row)

      this.$refs.orderDetailForm.fields.map((i) => {
        // console.log(i.prop)
        // orderData.0.soldNumber
        if (i.prop === `orderData.${index}.soldNumber`) {
          i.clearValidate()
        }
      })

      if (row.sex == "1") {
        row.soldNumber = this.bakList[index].soldNumber
      }
    },
    onSubmit(formName) {
      console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let aa = this.orderDetailForm.orderData[0]
          console.log(this.orderDetailForm.orderData)
          console.log({ ...aa })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
  },
}
</script>
