<template>
    <div class="home">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <button @click="save()">save</button>
        <button @click="find()">find</button>
    </div>
</template>
<script type="text/javascript">
import CHAT from '../../api/client'
import {
    customerFind
} from '../../api/api'
export default {
    name: 'home',
    data() {
        return {

        }
    },
    methods: {
        save() {
            this.$http.post('/api/customer/save', {
                    name: 't',
                    pwd: 'admin',
                    uId: '009'
                })
                .then((rep) => {
                    rep = rep.body;
                    console.log(rep);
                }, (error) => {
                    console.log(error);
                });
        },
        find() {
            this.$http.get('/api/customer/find')
                .then((rep) => {
                    rep = rep.body;
                    console.log(rep);
                }, (error) => {
                    console.log(error);
                });
        }
    }
}
</script>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
