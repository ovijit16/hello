<template>
    <div class="ThePost">
    <h1>Posts</h1><hr><hr>
    <input type="text" v-model="searchTerm" placeholder="Search">
    <div v-for="post in filtersearch" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body | pcs }}</p><hr>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ThePost',

  data(){
    return{
      posts:[],
      searchTerm: ''
    }
  },
  computed:{
    filtersearch(){
       return this.posts.filter(post=>{
            return post.title.match(this.searchTerm)
        })
    }
  },
  methods:{
    
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            // console.log(response);
            this.posts=response.data;
        })
        .catch(error=>{
            console.log(error);
        })
    
  }

}
</script>

<style scoped>
    h1{
        color: red;
    }
</style>