<template>
    <div>
        <input type="text" :value="val" @input="change">
    </div>
</template>

<script>

    export default {
        props:{
            value:{
                type: String,
                default: ""
            }
        },
        data(){
            return {
                val: this.value
            }
        },
        created(){
            console.log(this.test)
        },
        methods:{
            change(e){
                console.log(e,e.target.value)
                this.val = e.target.value
                this.$emit('input',this.val)
            }
        }
    }
</script>

<style scoped>

</style>