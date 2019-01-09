<template>
    <div>
        
        <!-- <k-input v-model="someValue"></k-input> -->
        <k-form :model="form">
            <k-form-item label="姓名" prop="name">
                <k-input type="text" v-model="form.name"></k-input>
            </k-form-item>   
            <k-form-item label="密码" prop="pwd">
                <k-input type="password" v-model="form.pwd"></k-input>
            </k-form-item> 
            <k-form-item>
                <button>登录</button>
            </k-form-item > 
        </k-form>
        
    </div>
</template>

<script>
    import KForm from './form.vue'
    import KFormItem from './formItem.vue'
    import KInput from './input.vue'
    
    export default {
        data(){
            return {
                someValue: "someValue",
                form:{
                    name:"",
                    pwd: ""
                }
            }
        },
        created(){
            console.log(KInput)
        },
        components:{
            KInput,
            KFormItem,
            KForm
        }
    }
</script>

<style scoped>

</style>