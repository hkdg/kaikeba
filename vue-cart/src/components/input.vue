<template>
   
    <input :type="type" :value="val" @input="change">
        
</template>

<script>

    export default {
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
            }
        }
    }
</script>

<style scoped>

</style>