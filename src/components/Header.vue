<template>
    <div class="header-component">
        <span>{{randomName()}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            heads:[
                '写信告诉我今天, 海是什么颜色',
                '你是风儿，我是沙；风儿吹吹，沙儿飘飘',
                'take a sad song,and make it better',
                '断剑重铸之日，骑士归来之时'
            ]
        }
    },
    methods:{
        randomName(){
            let index = Math.random() * this.heads.length;
            index = Math.round(index);
            if(index < 0){
                index = 0;
            }
            if(index > this.heads.length -1){
                index = this.heads.length -1;
            }
            return this.heads[index]
        }
    }
}
</script>
<style lang="less" scoped>
.header-component{
    position: fixed;
    z-index: 40;
    width: 100%;
    top: 0;
    background-color: #ffffff;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
    height: 40px;
    padding: 10px 20px;
    box-sizing: content-box;
    span{
        font-size: 1rem;
        line-height: 40px;
        color: #2c3e50;
        font-weight: 600;
        font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
}
</style>