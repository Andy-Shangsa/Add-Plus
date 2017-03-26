import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import UserAdd from '../components/users/user-add'
import userQuery from '../components/users/user-query'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/user-add',
        name: 'UserAdd',
        component: UserAdd
    }, {
        path: '/user-query',
        name: 'userQuery',
        component: userQuery
    }, {
        path: '*',
        /* 全局路由重定向 */
        component: Hello
    }]
})
