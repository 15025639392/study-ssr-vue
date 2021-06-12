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
        const {data} = await axios({
            method:'GET',
            url:'http://localhost:3000/data.json'
        })
        console.log(data)
        return data
    }
}
</script>

<style>

</style>