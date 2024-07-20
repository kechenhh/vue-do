<template>
  <div>
    <!-- <div v-if="grg.aa == 'f'">show</div> -->
    <div id="print_area">
      <h2>标题</h2>
      <el-table
        :data="tableData"
        ref="printBox"
        style="width: 500px"
        @current-change="handleRadioChange"
      >
        <el-table-column type="index" width="50px" align="center">
          <div class="con">
            <template slot-scope="scope">
              <el-radio v-model="defaultRadio" :label="scope.row.tel">
                {{ scope.row.tel }}
              </el-radio>
            </template>
          </div>
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="tel" label="电话" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="250">
        </el-table-column>
        <el-table-column prop="handle" label="操作" width="120"
          >操作
        </el-table-column>
      </el-table>
    </div>

    {{ showData }}
    <el-button @click="testClick">测试</el-button>
    <el-button @click="getDate3">测试1</el-button>
    <el-button @click="printHTML">打印</el-button>
  </div>
</template>

<script>
import axios from "axios"
import print from "print-js"
export default {
  data() {
    return {
      isData: {},
      showData: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
          tel: "0451-55190419",
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
          tel: "086-24-89166637",
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄",
          tel: "0311-87208070",
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 88787 弄",
          tel: "0931-8912116",
        },
        {
          date: "2016-05-03",
          name: "王小虎5",
          address: "上海市普陀区金沙江路 1516 弄",
          tel: "0731-58238226",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tel: "0513-81050716",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tel: "0532-85071039",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tel: "0531-82940865",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tel: "024-22892039",
        },
      ],
      defaultRadio: -1,
    }
  },
  mounted() {
    this.defaultRadio = this.tableData[0].tel
  },
  methods: {
    printHTML() {
      print({
        printable: "print_area",
        type: "html",
        header: "打印标题",
        style: `
        .con{
           margin: 500px
        }`,
      })
    },
    getDate3() {
      axios({
        method: "post",
        url: "/api/example2",
        data: {
          List: [],
        },
      })
        .then((res) => {
          console.log("🚀 ~ res:", res)
        })
        .catch(err)
    },
    handleRadioChange(val) {
      console.log(val)
      if (val) {
        this.defaultRadio = val.tel
      }
      console.log(this.defaultRadio, "defaultRadio")
    },
    testClick: _.throttle(
      function () {
        console.log(6666)
        this.getData()
      },
      1000,
      {
        leading: true,
        trailing: false,
      }
    ),
    getData() {
      console.log(this.defaultRadio, "defaultRadio")
      let sub = [...this.tableData, { name: "ffff" }]
      try {
        axios({
          method: "post",
          url: "/api/example",
          data: {
            List: sub,
          },
        })
          .then((res) => {
            this.showData = res.data.list
            let a = this.showData[0]
          })
          .catch(err)
      } catch (error) {}

      // return request({
      //   url: "/api/example",
      //   method: "post",
      //   data: sub,
      // })
    },
  },
}
</script>
<style>
.el-radio__label {
  display: none;
}
/* @media print {
  @page {
    margin: 0;
  }
  body {
    margin: 1.6cm;
  }
} */
</style>
