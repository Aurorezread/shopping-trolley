<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="goods.goods_count--">
      -
    </button>
    <input type="number" class="form-control inp" v-model="goods.goods_count" />
    <button type="button" class="btn btn-light" @click="goods.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: ["goods"],
  watch: {
    goods: {
      deep: true,
      immediate: true,
      handler(newValue) {
        newValue.goods_count < 0
          ? (newValue.goods_count = 0)
          : newValue.goods_count;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>