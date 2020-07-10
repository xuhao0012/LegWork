<template>
<div id="release">
    <header>
        <span>发布</span>
        <i class="iconfont icontianjia-copy" @click="add()"></i>
    </header>
     
    <ul>
        <li v-for=" item in releaselist" :key="item.index" @click="showdetail(item)">
            <div class="r-head">{{item.title}}</div>
            <p v-for=" tag in item.tag" :key="tag.index">{{tag}}</p>
        </li>
    </ul>
    <div v-if="!releaselist.length" id="none">你还没有发布需求哦！赶快去发布吧！</div>
</div>
</template>

<script>
export default {
components: {},
data() {
//这里存放数据
return {
    releaselist: [{title: '校外代购', content: '雄风有个KFC快点搞下', tag: ['校外']},
    {title: '校内代拿', content: '菜鸟驿站一号位2-24有个椅子', tag: ['校内','代拿']},
    {title: '寻物启事' , content: '丢失一只小猫', tag: ['校内','寻物启事']}]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    add(){
        this.$router.push('/addrelease')
    },
    showdetail(n){
        this.$router.push({name: 'releasedetail', params: n})
    }
}
}
</script>
<style>
#release header{
  background-color: #3eb8b4;
  padding: 10px 0px;
  overflow: hidden;
  position:fixed;
  top: 0px;
  width: 100%;
}
#release span{
  margin-left: 20px;
  float: left;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
}
#release ul{
    list-style: none;
    padding: 0px;
    text-align: left;
    margin: 0px;
}
#release ul li:first-child{
    padding-top: 60px;
}
#release i{
    float: right;
    font-size: 30px;
    margin-right: 10px;
    color: white;
}
#release li{
    padding-left: 5px;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 10px;
    padding-top: 5px;
}
.r-head{
    font-weight: bold;
    font-size: 1.2rem;
}
#release p{
    display: inline;
    margin-right:10px;
    background-color: #cccccc;
    border: 0.5px solid black;
    border-radius: 5px 5px;
}
#none{
    padding-top: 100px;
    font-size: 20px;
}
</style>