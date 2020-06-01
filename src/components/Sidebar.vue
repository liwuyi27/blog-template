<template>
    <div class="sidebar-component">
        <div class="sidebar-inner">
            <Tree :data="data"></Tree>
        </div>
    </div>
</template>
<script>
import side from '../config/side.js';
import Tree from '../components/Tree.vue'
export default {
    components:{
        Tree
    },
    data(){
        return {
            data:side
        }
    }
}
</script>
<style lang="less" scoped>
.sidebar-component{
    position: fixed;
    height: calc(100% - 61px);
    box-shadow: 1px 0 0 0 #eeeeee;
    z-index: 10;
    top: 61px;
    left: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    .sidebar-inner{
        width: 260px;
        padding: 35px 0 60px 20px;
    }
}
</style>
<style lang="less">
.sidebar-component{
    .sidebar-inner{
        ul{
            list-style-type: none;
            margin: 0;
            line-height: 1.5em;
            padding-left: 1em;
        }
        li{
            margin-top: 0.5em;
            h3{
                margin: 1em 0;
            }
        }
        ul.menu-root{
            padding-left: 0;
        }
    }
}
</style>