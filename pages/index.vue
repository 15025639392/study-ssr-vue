<template>
    <div>
        <h1>index page</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'IndexPage',
    async asyncData(){
        // 当想要动态页面内容有利于SEO的时候，或者是提升首屏渲染速度的时候，就在 asyncData中拿数据
        const {data} = await axios({
            method:'GET',
            url:'http://localhost:3000/data.json'
        })
        console.log(data)
        return data
    },
    data(){
        // 如果是非一步数据或者是普通数据，则正常初始化到 data 中即可
        return {
            test:'ldy'
        }
    }
}
</script>

<style>

</style>