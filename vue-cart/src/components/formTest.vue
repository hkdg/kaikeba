<template>
  <div>
    <!-- <k-input v-model="someValue"></k-input> -->
    <k-form :model="form" :rules="rules" ref="ruleForm">
      <k-form-item label="姓名" prop="name">
        <k-input type="text" v-model="form.name"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="pwd">
        <k-input type="password" v-model="form.pwd"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="login">登录</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KForm from "./form.vue";
import KFormItem from "./formItem.vue";
import KInput from "./input.vue";

export default {
  data() {
    return {
      someValue: "someValue",
      form: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入名称" },
          { min: 6, max: 10, message: "请输入6~10位用户名" }
        ],
        pwd: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  created() {
    console.log(KInput);

  },
  methods:{
    login(){
      this.$refs.ruleForm.validate(bool=>{
        if(bool){
          console.log('成功')
        }else{
          console.log('失败')
        }
      })
    }
  },
  components: {
    KInput,
    KFormItem,
    KForm
  }
};
</script>

<style scoped>
</style>