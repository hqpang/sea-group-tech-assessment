<template>
  <div class="home">
    <about-view></about-view>
  </div>
</template>

<script>


import AboutView from './AboutView.vue';

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    AboutView
}
}
</script>
