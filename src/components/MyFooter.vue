<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        v-model="isAll"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{total}}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算 ( {{ closing }} )
    </button>
  </div>
</template>

<script>
export default {
  props: {
    BooksList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isAll: {
      get() {
        let num = 0;
        this.BooksList.forEach((item) => {
          if (item.goods_state) {
            num++;
          }
        });
        return num === this.BooksList.length;
      },
      set(value) {
        this.BooksList.forEach((item) => (item.goods_state = value));
      },
    },
    closing() {
      return this.BooksList.reduce(
        (a, b) => a + (b.goods_state ? b.goods_count : 0),
        0
      );
    },
    total() {
      return this.BooksList.reduce(
        (a, b) => a + (b.goods_state ? b.goods_count * b.goods_price : 0),
        0
      );
    },
  },

  mounted() {
    console.log(this.BooksList);
  },
};
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>