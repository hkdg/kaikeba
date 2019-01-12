export default {
    dispatch(componentName,eventName,params){
        let parent = this.$parent||this.$root
        let name = parent.$options.name
        // while(parent&&(!name||name !== componentName)){
        //     parent = parent.$parent
        //     console.log('dis',parent)
        //     if(parent){
        //         name = parent.$options.name
        //     }
        // }
        fn()
        function fn(){
            if(parent&&(!name||name !== componentName)){
                parent = parent.$parent
                console.log('dis',parent)
                if(parent){
                    name = parent.$options.name
                    fn()
                }
            }
            
        }
        if(parent){
            parent.$emit.apply(parent,[eventName].concat(params))
        }
    }
}