<template>
    <div id="topNav">
        <el-menu theme="dark" class="top-nav" mode="horizontal">
            <div class="toggle-icon">
                <i class="el-icon-menu" @click="toggle()"></i>
            </div>
            <div class="logo">
                安徽农信银
            </div>
            <div class="fr user-info">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">
                        <img class="fr" src="../assets/img/01.jpg"/>
                        admin
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
            return {
               
            };
        },
        methods: {
            logout() {

            },
            toggle() { //显示隐藏sliderNav
                this.$emit('toggle')
            }
        }
}
</script>
<style scoped>
.top-nav {
    box-sizing: border-box;
    height: 60px;
    line-height: 60px;
    background-color: #242f42;
}

.toggle-icon {
    display: inline-block;
    width: 80px;
    text-align: center;
    font-size: 26px;
    color: #00BCD4;
    cursor: pointer;
}

.logo {
    display: inline-block;
    width: 120px;
    text-align: center;
    font-size: 26px;
    color: #00BCD4;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.user-info {
    margin-right: 20px;
    cursor: pointer;
}

.userinfo-inner {
    color: #fff;
}

.userinfo-inner img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px 0px 10px 10px;
}
</style>
