<template>
  <div class="my-header" :style="{background,color}">购物车案例</div>
</template>

<script>
export default {
  props:["background",'color']
}
</script>

<style lang="less" scoped>
  .my-header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>