<template>
  <div>
    demo3-过渡
    <br />
    <router-link to="/demo3-1">demo3-1</router-link> |
    <router-link to="/demo3-2">demo3-2</router-link> |
    <div class="index-content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
}
</script>

<style scoped>
.index-content {
  width: 100%;
  /* //解决出现横向滚动条问题 */
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  /* // 解决页面从上往下位移问题 */
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
