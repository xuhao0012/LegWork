<template>
  <div id="app">
    <div id="slide">
      <transition :name="transitionname">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
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
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-enter-active{
  transition: transform .3s;
}
.slide-left-enter-to{
  transform: translateX(0);
}
.slide-left-leave {
  transform: translateX(0);
}
.slide-left-leave-active {
  transition: transform .3s;
}
.slide-left-leave-to {
  transform: translateX(0);
}
 
.slide-right-enter {
  transform: translateX(0);
}
.slide-right-enter-active{
  transition: transform .3s;
}
.slide-right-enter-to{
  transform: translateX(0);
}
.slide-right-leave {
  transform: translateX(0);
}
.slide-right-leave-active {
  transition: transform .3s;
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
