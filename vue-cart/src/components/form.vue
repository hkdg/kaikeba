<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            model:{
                type: Object
            },
            rules:{
                type: Object,
                required:true
            }
        },
        provide(){
            return {
                form: this
            }
        },
        data(){
            return {
                fields:[]
            }
        },
        created(){
            this.$on('formItemAdd',item=>{
                this.fields.push(item)
            })
        },
        methods:{
            async validate(callback){
                const tasks = this.fields.map(item=>item.validate())
                const results = await Promise.all(tasks)
                let ret = true
                console.log('results',results)
                results.forEach(valid=>{
                    if(!valid){
                        ret = false
                    }
                })
                callback(ret)
            }
        }
    }
</script>

<style scoped>

</style>