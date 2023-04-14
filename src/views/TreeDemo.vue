<template>
  <div class="home">
    <!-- <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree> -->
    <el-tree lazy :load="loadNode" :props="defaultProps" node-key="CifNO">
    </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultProps: {
        name: "CifNO",
        label: "CifName",
        children: "children",
      },
      data: [],
      startCif: "10100053420026",
    };
  },
  mounted() {},
  methods: {
    loadNode(node, resolve) {
      //如果展开第一级节点，从后台加载一级节点列表（固定的）
      if (node.level == 0) {
        this.loadfirstnode(resolve);
      }
      //如果展开其他级节点，动态从后台加载下一级节点列表（可变的）
      if (node.level >= 1) {
        this.loadchildnode(node, resolve);
      }
    },
    async loadfirstnode(resolve) {
      let resList = await this.getParams();
      let getList = resList.filter((item) => {
        return item.CifNO == this.startCif;
      });
      resolve(getList);
    },
    async loadchildnode(node, resolve) {
      let resList = await this.getParams();
      let getList = resList.filter((item) => {
        return item.UpCustNo == node.data.CifNO;
      });
      resolve(getList);
    },
    getParams() {
      return new Promise((resolve) => {
        setTimeout(() => {
          let list = [
            {
              CifNO: "10100050960031",
              UpCustNo: "10100053420026",
              PrintOrder: null,
              NodeFlag: "1",
              CifName: "弧州觝ahaah公司",
              CifLevel: "4",
            },
            {
              CifNO: "10100053400076",
              UpCustNo: "10100053350064",
              PrintOrder: null,
              NodeFlag: "1",
              CifName: "C62986",
              CifLevel: "4",
            },
            {
              CifNO: "10100053420026",
              UpCustNo: "10100053400076",
              PrintOrder: null,
              NodeFlag: "1",
              CifName: "特种凭证支取账户",
              CifLevel: "4",
            },
            {
              CifNO: "10100053860204",
              UpCustNo: "10100050960031",
              PrintOrder: null,
              NodeFlag: "0",
              CifName: "测试1",
              CifLevel: "4",
            },
          ];
          resolve(list);
        }, 1000);
      });
    },
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>



