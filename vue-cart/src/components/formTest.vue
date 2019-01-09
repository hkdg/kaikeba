<template>
    <div>
        <k-input v-model="someValue"></k-input>
        {{someValue}}
    </div>
</template>

<script>
    import KInput from './input.vue'
    export default {
        data(){
            return {
                someValue: "someValue"
            }
        },
        created(){
            console.log(KInput)
        },
        components:{
            KInput
        }
    }
</script>

<style scoped>

</style>