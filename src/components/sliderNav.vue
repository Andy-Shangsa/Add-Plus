<template>
    <div class="sidebar">
        <el-menu class="el-menu-vertical-demo" theme="dark" unique-opened router activeClass='is-active'>
            <el-menu-item index="home">
                <i class="el-icon-setting"></i>首页
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>用户</template>
                <el-menu-item index="user-query">用户查询</el-menu-item>
                <el-menu-item index="user-add">用户新增</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-date"></i>表单</template>
                <el-menu-item index="baseform">基本表单</el-menu-item>
                <el-menu-item index="vueeditor">编辑器</el-menu-item>
                <el-menu-item index="markdown">markdown</el-menu-item>
                <el-menu-item index="upload">文件上传</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                <el-menu-item index="basecharts">基础图表</el-menu-item>
                <el-menu-item index="mixcharts">混合图表</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    }
}
</script>
<style scoped>
.sidebar { 
	/* position: absolute;
        display: block;
           left: 0; 
           top: 60px; 
           bottom: 0;
        width: 235px;
        background: #2E363F;
        z-index: 100; */
    flex: 0 0 260px;
    width: 60px;
}

.sidebar > ul {
    height: 100%;
}
</style>
