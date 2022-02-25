<template>
  <div class="home">
      <SignInView></SignInView>
  </div>
</template>

<script>

import SignInView from "./SignInView.vue";

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
    SignInView
}
}
</script>
