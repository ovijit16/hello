<template>
    <div class="TheHook">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Click Me</button>
    </div>
</template>

<script>
export default {
  name: 'TheHook',

  data(){
    return{
        title: 'Hook Part',
    }
  },
  methods:{
    changeTitle(){
        this.title='Learn Hunter';
    }
  },
//   beforeCreate(){
//     alert('Before created hook');
//   },
//   created(){
//     alert('created hook');
//   },
//   beforeMount(){
//     alert('Before mount hook');
//   },
//   mounted(){
//     alert('mounted hook');
//   },
  beforeUpdate(){
    alert('Before Update');
  },
  updated(){
    alert('Updated');
  },
}
</script>

<style scoped>

</style>