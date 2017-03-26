<template>
    <div id="app">
        <top-nav v-on:toggle="toggleSlider()"></top-nav>
        <div class="container">
            <transition name="slider">
                <slider-nav v-if="sliderShow"></slider-nav>
            </transition>
            <div class="router-container" :class="{active:sliderShow}">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import sliderNav from './components/sliderNav'
import topNav from './components/topNav'
export default {
    name: 'app',
    components: {
        topNav,
        sliderNav
    },
    data() {
        return {
            sliderShow: false
        }
    },
    computed: {

    },
    methods: {
        toggleSlider() {
            this.sliderShow = !this.sliderShow;
        }
    }
}
</script>
<style>
#id {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.container {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
}

.slider-enter-active,
.slider-leave {
    transform: translateX(0);
    transition: transform .3s ease-in-out;
}

.slider-enter,
.slider-leave-active {
    transform: translateX(-250px);
    transition: transform .3s ease-in-out;
}

.router-container {
    flex: 1;
    width: 100%;
    overflow-y: scroll;
    padding: 20px;
    transition: all .3s ease-in-out;
}

.active {
    transform: translateX(0px);
    /* padding-left: 255px; */
}
</style>
