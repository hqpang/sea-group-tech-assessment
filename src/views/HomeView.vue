<template>
  <div class="home">
    <to-do-view></to-do-view>
  </div>
</template>

<script>


import ToDoView from './ToDoView.vue';

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
    ToDoView
}
}
</script>
