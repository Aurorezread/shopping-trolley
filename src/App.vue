<template>
  <div id="app">
    <MyHeader background="hotpink" color="gold"></MyHeader>
    <MyGoods
      v-for="item in BooksList"
      :key="item.goods_id"
      :goods="item"
    ></MyGoods>
    <MyFooter :BooksList="BooksList"></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyGoods from "./components/MyGoods.vue";
import MyFooter from "./components/MyFooter.vue";

// 引入axios
import axios from "axios";
export default {
  components: { MyHeader, MyGoods, MyFooter },
  data() {
    return {
      BooksList: [],
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      const res = await axios({ url: "/api/cart" });
      console.log(res);
      this.BooksList = res.data.list;
    },
  },
};
</script>

<style>
#app {
  padding: 50px 0;
  max-height: 100vh;
  overflow: auto;
}
</style>