<template>
  <div>
    about
    <h1> a 链接</h1>
    <a href="/">首页</a>
    <h2>router-link</h2>
    <router-link to="/">首页</router-link>
    <!---编程式导航-->
    <button @click="onClick">编程导航</button>
  </div>
</template>

<script>
export default {
  methods:{
    onClick(){
      console.log('hello')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>