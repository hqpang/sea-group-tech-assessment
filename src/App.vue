<template>
  <v-app id="app">
    <AppNavigation></AppNavigation>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>

  </v-app>

</template>

<script>
import AppNavigation from "./components/AppNavigation.vue";


export default {
    name: "App",
    components: { AppNavigation }
}
</script>

<style scoped>
.container {
    background: aliceblue;
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>