<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <TheNavbar></TheNavbar>
    <!-- <TheHook></TheHook> -->
    <ThePost></ThePost>
   
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import TheNavbar from './components/TheNavbar.vue'
// import TheHook from './components/TheHook.vue'
import ThePost from './components/ThePost.vue'

export default {
  name: 'app',

  components:{
    // HelloWorld,
    TheNavbar,
    // TheHook,
    ThePost,
   
  },
 data(){
  return {
    title: 'Hurray! Our vue apps are running.'
  }
 },
 methods: {
 
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
