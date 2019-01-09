<template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in goods" :key="item.id">
        <span v-text="item.text"></span>
        <span v-text="item.price"></span>
        <button @click="addCart(index)">加入购物车</button>
      </li>
    </ul>
    <Cart></Cart>

    <br>
    <h1>表单</h1>
    <form-test></form-test>
  </div>
</template>

<script>
import Cart from "./components/Cart";
import formTest from "./components/formTest";
export default {
  name: "App",
  data() {
    return {
      goods: [
        {
          id: 1,
          text: "web全栈之路",
          price: 9999
        },
        {
          id: 2,
          text: "python爬虫之路",
          price: 999
        }
      ],
      inp: ""
    };
  },
  created() {},
  mounted() {
    // console.log(this.$refs.inp);
  },
  methods: {
    addCart(i) {
      const good = this.goods[i];
      this.$bus.$emit("addCart", good);
    }
  },
  components: {
    Cart,
    formTest
  }
};
</script>

<style>
</style>
