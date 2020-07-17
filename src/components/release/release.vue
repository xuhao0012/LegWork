<template>
<div id="release">
    <header>
        <span class="title">发布</span>
        <i class="iconfont icontianjia-copy" @click="add()"></i>
    </header>
    <div id="sift">
            <span class="insift">待完成</span>
            <span class="insift">未接单</span>
            <span class="insift">已成交</span>
    </div>
    <div id="content">
        <cube-scroll
        ref="scroll"
        :options="options">
            <ul>
                <li v-for=" item in releaselist" :key="item.index">
                    <div class="columntitle">{{item.tag}}</div>
                    <div class="status">{{item.status}}</div>
                    <div class="columnitems">发布时间：{{item.time}}</div>
                    <div class="columnitems">标题：{{item.title}}</div>
                    <div class="columnitems">接单人：{{item.order}}</div>
                    <button @click="showdetail(item)" class="command">查看详情</button>
                    <button class="contact">联系</button>
                </li>
            </ul>
        </cube-scroll>
    </div>
    
    <div v-if="!releaselist.length" id="none">你还没有发布需求哦！赶快去发布吧！</div>
</div>
</template>

<script>
export default {
components: {},
data() {
//这里存放数据
return {
     releaselist: [{tag: '校外代购', title: '雄风有个KFC快点搞下',time:'2020-3-2',order: '小王',status: '已成交'},
    {tag: '校内代拿', title: '菜鸟驿站一号位2-24有个椅子',time:'2020-4-1',order: '小徐', status: '待完成'},
    {tag: '寻物启事' , title: '丢失一只小猫',time:'2020-4-13',order: '小王', status: '未成交'},
    {tag: '寻物启事' , title: '丢失一只小猫',time:'2020-4-13',order: '小王', status: '未成交'},
    {tag: '寻物启事' , title: '丢失一只小猫',time:'2020-4-13',order: '小王' ,status: '未成交'},
    {tag: '寻物启事' , title: '丢失一只小猫',time:'2020-4-13',order: '小王' ,status: '未成交'},
    {tag: '寻物启事' , title: '丢失一只小猫',time:'2020-4-13',order: '小王' ,status: '未成交'},
    {tag: '寻物启事' , title: '丢失一只小猫',time:'2020-4-13',order: '小王' ,status: '未成交'},
    {tag: '寻物启事' , title: '丢失一只小猫',time:'2020-4-13',order: '小王' ,status: '未成交'},
    {tag: '寻物启事' , title: '丢失一只小猫',time:'2020-4-13',order: '小王', status: '未成交'}]
};
},
//监听属性 类似于data概念
computed: {
    options(){
        return {
            pullDownRefresh: false,
            pullUpLoad: false,
            scrollbar: true,
            click: true,
            probetype: 1
        }
  }
},    
watch: {},
//方法集合
methods: {
    add(){
        this.$router.push('/release/addrelease')
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
#release .title{
  margin-left: 20px;
  margin-top: 5px;
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
#release #sift{
    position: fixed;
    top: 50px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 2.2rem;
    align-items: center;
}
#release .insift{
    border-bottom: #3eb8b4 solid 1px;
}
#release i{
    float: right;
    font-size: 30px;
    margin-right: 10px;
    color: white;
}
#release li{
    position: relative;
    display: block;
    padding:7px;
    height: 170px;
    margin: 9px 12px;
    border-bottom: 3px solid #aaaaaa;
    border-right: 3px solid #aaaaaa;
    border-radius: 5px;
    background-color:#ffffff;
    overflow: hidden;
}
#release .columntitle{
    font-weight: bold;
    font-size: 1.2rem;
    margin: 10px 5px;
}
#release .columnitems{
    margin: 20px 5px;
}
#release .command{
    position: absolute;
    right: 10px;
    bottom: 5px;
}
#release .contact{
    position: absolute;
    bottom: 5px;
    right: 90px;
}
#release p{
    display: inline;
    margin-right:10px;
    background-color: #cccccc;
    border: 0.5px solid black;
    border-radius: 5px 5px;
}
#release .status{
    color: #3eb8b4;
    position: absolute;
    top: 15px;
    right: 10px;
}
#none{
    padding-top: 100px;
    font-size: 20px;
}
#release #content{
    position: fixed;
    width: 100%;
    top: 85px;
    bottom: 68px;
    background-color: #eee;
}
#release button{
    background-color: #3eb8b4;
    color: white;
    border: 0px;
    border-radius: 5px;
    padding: 5px 10px;
}
#release button:focus{
    outline: none;
}
#release button:active{
    background: #3ec8c4;
}
</style>