<template>
  <div>
    <span v-if="label" v-text="label"></span>
    <div>
      <slot></slot>
    </div>
    <div v-if="error == 'error'" class="red" v-text="errorMessage"></div>
  </div>
</template>

<script>
import schema from "async-validator";
export default {
  inject: ["form"],
  props: ["label", "prop"],
  data() {
    return {
      error: "",
      errorMessage: ""
    };
  },
  created() {
    if (this.prop) {
      this.$on("validate", this.validate);
    }
    // console.log('form',this.form)
  },
  mounted(){
      if(this.prop){
          this.form.$emit('formItemAdd',this)
      }
  },
  methods: {
    validate() {
      return new Promise((resolve,reject) => {
        const descriptor = {
          //校验规则
          [this.prop]: { type: "string", required: true }
        };
        console.log("descriptor", descriptor);
        const validator = new schema(descriptor);
        console.log(" validator.validate", {
          [this.prop]: this.form.model[this.prop]
        });
        // return
        validator.validate(
          { [this.prop]: this.form.model[this.prop] },
          errors => {
            if (errors) {
              console.log("errors", errors);
              this.error = "error";
              this.errorMessage = errors[0].message;
              resolve(false)  
            } else {
              this.error = "";
              this.errorMessage = "";
            resolve(true)  
            }
          }
        );
      });
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
</style>