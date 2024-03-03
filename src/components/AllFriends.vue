<template>
    <div id="allfriends">
       <h2>All Friends</h2>
       <div v-for="(friend,index) in friends" :key="index">
        <h4 @click="unfriend(friend.name)">{{ friend.name }}</h4>
       </div>
    </div>
</template>

<script>
export default {
    name: 'AllFriends',
    props: ['friends'],
    data() {
        return {
           
        }
    },
    methods: {
        unfriend(name){
            this.$emit('delete', {name})
            // console.log(name);
        }
    }
}
</script>

<style scoped>
nav {
    text-align: center;
}

nav ul {
    padding: 0;
}

nav li {
    display: inline-block;
    list-style-type: none;
    margin: 0;
    padding: 8px;
}
</style>