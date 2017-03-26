<template>
    <div id="hello">
        <div class="echarts">
            404
           <!-- <IEcharts :option="bar" ></IEcharts> -->
       </div>
    </div>
</template>

<script> 
import IEcharts from 'vue-echarts-v3';
export default {
    name: 'hello',
    components: {
        IEcharts
    },
    data () {
        return {
            bar: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: '柱状图'
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis:{},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            },
        }
    },
    methods: {

    }
  	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .echarts {
        background-color: #666;
        height: 400px;
        width: 100%;
    }
</style>
