<template>
  <div>
    <table>
      <tr>
        <td>选择</td>
        <th>课程</th>
        <th>单价</th>
        <th>数量</th>
        <th>价格</th>
      </tr>
      <tr v-for="(c,i) in cart" :key="c.name">
        <td>
          <input type="checkbox" v-model="c.active">
        </td>
        <td>{{c.text}}</td>
        <td>${{c.price}}</td>
        <td>
          <button @click="minus(i)">-</button>
          <span>{{c.count}}</span>
          <button @click="add(i)">+</button>
        </td>
        <td>{{c.count*c.price}}</td>
      </tr>
      <tr v-if="total">
        <td colspan="2">{{activeCount}}/ {{count}}</td>
        <td colspan="2">${{total}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: []
    };
  },
  created() {
    
    const cart = localStorage.getItem("cart");
    if (cart) {
// console.log(JSON.parse(localStorage.getItem("cart")));
      // this.cart = JSON.parse(cart);
    }

    this.$bus.$on("addCart", good => {
      const ret = this.cart.find(v => v.text == good.text);
      if (ret) {
        ret.count += 1;
      } else {
        this.cart.push({ ...good, active: true, count: 1 });
      }
    });
  },
  methods: {
    add(i) {
      this.cart[i].count += 1;
    },
    minus(i) {
      const count = this.cart[i].count;
      if (count > 1) {
        this.cart[i].count -= 1;
      } else {
        this.remove(i);
      }
    },
    remove(i) {
      if (window.confirm(`是否删除商品${this.cart[i].text}?`)) {
        this.cart.splice(i, 1);
      }
    }
  },
  watch: {
    cart: {
      handler(newValue, oldValue) {
        console.log(newValue);
        localStorage.setItem("cart", JSON.stringify(newValue));
      },
      deep: true
    }
  },
  computed: {
    total() {
      let num = 0;
      this.cart.forEach(v => {
        if (v.active) {
          num += v.price * v.count;
        }
      });
      return num;
    },
    count() {
      return this.cart.length;
    },
    activeCount() {
      return this.cart.filter(v => v.active).length;
    }
  }
};
</script>

<style scoped>
</style>