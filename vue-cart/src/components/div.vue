<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'KTest',
        created(){
            this.$on("validate", this.validate);
        },
        methods:{
            validate(val){
                console.log('div',val)
            }
        }
    }
</script>

<style scoped>

</style>