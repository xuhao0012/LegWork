<template>
    <div id="mine">
        <img src="../image/touxiang.jpeg" alt="用户头像" id="big">
        <img src="../image/touxiang.jpeg" alt="用户头像" id="touxiang">
        <span id="userid">徐昊</span>
        <div id="edit"> <i class="iconfont iconbianji"></i> 编辑资料</div>
        <div id="content">
            <div class="contentcolumn"><i class="iconfont iconqianbao"></i>我的钱包<i class="iconfont iconjiantou"></i></div>
            <div class="contentcolumn"><i class="iconfont iconbangding"></i>账号绑定<i class="iconfont iconjiantou"></i></div>
            <div class="contentcolumn"><i class="iconfont iconxiugaimima"></i>修改密码<i class="iconfont iconjiantou"></i></div>
            <div class="contentcolumn"><i class="iconfont iconlianxiwomen"></i>联系我们<i class="iconfont iconjiantou"></i></div>
            <cube-button class="logout">退出登录</cube-button>
        </div>
    </div>
</template>
<script>
export default{
    name:'mine'
}
</script>
<style>
#big{
    filter: blur(3px);
    position: fixed;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 30%;
}
#touxiang{
    border: 1px solid #ffffff;
    border-radius: 90px;
    width: 90px;
    height: 90px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#userid{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 1.1rem;
    color: white;
}
#edit{
    position: absolute;
    top: 25%;
    left: 50%;
    color: #ffffff;
    border: solid 1px white;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    transform: translate(-50%,-50%);
}
#mine #content{
    position: absolute;
    top: 30%;
    text-align: left;
    width: 100%;
    background-color: #eeeeee;
    bottom: 65px;
    z-index: -1;
}
#mine .contentcolumn{
    margin-bottom: 10px;
    border-top: 1px solid #696969;
    height: 40px;
    line-height: 40px;
    font-size: 1.5rem;
    background-color: #fff;
    border-bottom:#eeeeee solid 1px;
}
#mine .contentcolumn .iconfont{
    font-size: 25px;
}
#mine .contentcolumn .iconjiantou{
    float: right;
}
#mine .logout{
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 40%;
    height: 10%;    
    font-size: 20px;
    line-height: 20%;
}
</style>