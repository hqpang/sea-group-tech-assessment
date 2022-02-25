<template>
  <v-container>
    <AppNavigation></AppNavigation>
    <v-content>
      <router-view></router-view>
    </v-content>

  </v-container>

</template>

<script>
import AppNavigation from "./components/AppNavigation.vue";


export default {
    name: "App",
    components: { AppNavigation }
}
</script>


<style lang="scss">

</style>
