<template>
    <div id="foot" v-show="showfoot">
      <section>
        <router-link to="/discovery" :style="changecolor1"><i class="iconfont icondiscover"></i><div>发现</div></router-link>
      </section>
      <section>
        <router-link to="/release" :style="changecolor2"><i class="iconfont iconfabu"></i><div>发布</div></router-link>
      </section>
      <section>
        <router-link to="/message" :style="changecolor3"><i class="iconfont iconxiaoxi"></i><div>消息</div></router-link>
      </section>
      <section>
        <router-link to="/mine" :style="changecolor4"><i class="iconfont iconwode2"></i><div>我的</div></router-link>
      </section>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      showfoot: true,
      changecolor1: {color:'black'},
      changecolor2: {color:'black'},
      changecolor3: {color:'black'},
      changecolor4: {color:'black'},
    };
  },
  computed: {},
  watch: {
    $route(now) {
    this.showFoot(now.name)
    this.changeColor(now.name)
      }
  },
  methods: {
      showFoot(name){
        const routers = ["release", "message", "mine","discovery"];
        this.showfoot = routers.indexOf(name) > -1;
      },
      changeColor(name){
        this.changecolor1={color:'black'}
        this.changecolor2={color:'black'}
        this.changecolor3={color:'black'}
        this.changecolor4={color:'black'}
        const routers = ["discovery", "release", "message","mine"];
        switch (routers.indexOf(name)) {
          case 0:
            this.changecolor1={color:'#3eb8b4'}
            break;
          case 1:
            this.changecolor2={color:'#3eb8b4'}
            break;
          case 2:
            this.changecolor3={color:'#3eb8b4'}
            break;
          case 3:
            this.changecolor4={color:'#3eb8b4'}
            break;
        }
      }
  },
  mounted(){
      this.showfoot=true
      this.showFoot(this.$route.name)
      this.changeColor(this.$route.name)
  }
};
</script>
<style>
#foot {
  width: 100%;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding-bottom: 10px;
  padding-top: 15px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
}
#foot a {
  text-decoration: none;
}
#foot section {
  display: inline;
}
#foot i{
  font-size: 1.4rem;
}
</style>
