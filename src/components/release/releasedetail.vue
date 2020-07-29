<!--  -->
<template>
<div id='releasedetail'>
    <header><i class="iconfont iconfanhui" @click="back()"></i><span class='title'>订单详情</span></header>
    <!-- {{this.$route.params}} -->
    <div id="content">
        <ul>
            <li class="column"> <span>订单号：</span> {{detail.num}}</li>
            <li class="column"> <span>类别：</span> {{detail.tag}}</li>
            <li class="column"> <span>标题：</span> {{detail.title}}</li>
            <li class="column"> <span>描述：</span> {{detail.content}}</li>
            <li class="column"> <span>截止日期：</span> {{detail.time}}</li>
            <li class="column"> <span>酬金：</span> {{detail.money}}</li>
            <li class="column"> <span>接单人：</span> {{detail.order}}</li>
            <li class="column">     
                <span>图片：</span><br/>
                <img  v-if="detail.photo" :src="detail.photo" alt="描述图片">
                <div v-if="!detail.photo">未提供图片</div>
            </li>
        </ul>
        <cube-button>联系</cube-button>
        <br/>
        <cube-button>投诉</cube-button>
    </div>
    
    

</div>
</template>

<script>
export default {
components: {},
data() {
//这里存放数据
return {
    detail: this.$route.params
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    back(){
        this.$router.go(-1)
    }
},
mounted(){
    console.log(this.$route.params.photo)
}
}
</script>
<style lang='scss' scoped>
@import '../../common/style/main';
.iconfanhui{
    float: left;
    color: white;
    font-size: 1.5rem;
    margin-top: 4px;
    margin-left: 15px;
}
#content{
    position: fixed;
    top: 50px;
    width: 90%;
    padding: 0px 5%;
}
.column{
    border-bottom: 1px solid #dddddd;
    padding: 15px 20px;
    text-align: left;
    font-size: 1.2rem;
}
</style>