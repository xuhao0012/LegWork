<template>
  <div id="app">
    <router-view/>
    <foot/>
  </div>
</template>
<script>
import foot from './components/foot.vue'
export default {
  components:{
    foot,

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
}
</style>
