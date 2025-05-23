<template>
  <TheNavigation></TheNavigation>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/TheNavigation/Navigation.vue'

export default {
  components: {
    TheNavigation
  }
}
</script>


<style scoped>
.container {
  /* border: 3px solid black; */
  height: 90vh;
}
</style>
