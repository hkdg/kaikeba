<template>
   
    <input :type="type" :value="val" @input="change">
        
</template>

<script>
    
    export default {
        inject:['formItme'],
        props:{
            value:{
                type: String,
                default: ""
            },
            type:{
                type: String,
                default: "text"
            }
        },
        data(){
            return {
                val: this.value
            }
        },
        created(){
        },
        methods:{
            change(e){
                // console.log(e,e.target.value)
                this.val = e.target.value
                this.$emit('input',this.val)
                // this.$parent.$emit('validate',this.val)
                // console.log(this,this.$dispatch)
                this.$dispatch.dispatch.bind(this)('formItem','validate',this.val)
            }
        }
    }
</script>

<style scoped>

</style>