<template>
    <div>
        <span v-if="label" v-text="label"></span>
        <div>
            <slot></slot>
        </div>
        <div v-if="error == 'error'"  class="red" v-text="errorMessage"></div>
    </div>
</template>

<script>
    export default {
        props:['label','prop'],
        data(){
            return {
                error: "",
                errorMessage: ""
            }
        }
    }
</script>

<style scoped>
.red{
    color:red;
}
</style>