<template>
    <div class="header-component">
        <span>写信告诉我今天，海是什么颜色</span>
    </div>
</template>
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