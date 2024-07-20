import { default } from './views/demo3/demo3-1.vue';
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/TreeDemo">树形结构</router-link> |
      <router-link to="/demo1">表格</router-link> |
      <router-link to="/demo2">表格表单</router-link> |
      <router-link to="/demo3">子路由横向切换</router-link> |
      <router-link to="/demo4">拖拽</router-link> |
      <router-link to="/demo5">新手引导</router-link> |
      <router-link to="/demo6">echarts</router-link> |
      <router-link to="/demo7">异步级联选择</router-link> |
      <router-link to="/demo8">gpt</router-link> |
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {},
}
</script>
<style></style>
