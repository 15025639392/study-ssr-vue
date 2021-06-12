<template>
  <div>
      <h1>_id.vue</h1>
      <div>{{article.test}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'IdAbout',
    async asyncData(context){
        const {data} = await axios({
            method:'GET',
            url:'http://localhost:3000/data.json'
        })
        
        const find = data.posts.find(r=>r.id==context.params.id)
        console.log(find)
        debugger
        return {
            article:find
        }
    }
}
</script>

<style>

</style>