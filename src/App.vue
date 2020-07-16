<template>
  <div id="app">
    <div id="slide">
      <!-- <transition :name="transitionname"> -->
        <router-view/>
      <!-- </transition> -->
    </div>
    <foot/>
  </div>
</template>
<script>
import foot from './components/foot.vue'
export default {
  data(){
    return {
      transitionname: ''
    }
  },
  components:{
    foot
  },
  watch:{
    $route(from,to){
      if(from.name==='release' && to.name==='addrelease'){
        this.transitionname='slide-right'
      }else if(from.name==='addrelease' && to.name==="release"){
        this.transitionname='slide-left'
      }else{
        this.transitionname=''
      }
    }
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
  width: 100%;
  overflow-x: hidden;
}
.slide-left-enter{
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.slide-left-enter-active,.slide-left-leave-active{
  transition: all .5s ease;
}
.slide-right-enter{
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-leave-to{
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.slide-right-enter-active,.slide-right-leave-active{
  transition: all .5s ease;
}
</style>
