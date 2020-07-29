<template>
  <div id="discovery">
    <header>
        <span class="title">发现</span>
    </header>
    <div id="container"></div>
  </div>
</template>

<script>
// import foot from "./foot";
export default {
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
components: {
    // foot
}
}
</script>
<style lang="scss" scoped>
  @import "../../common/style/main";
  #container{
    width: 100%;
    position:fixed;
    top: 50px;
    bottom: 70px;
  }
</style>