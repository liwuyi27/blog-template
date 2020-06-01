<template>
  <div class="content-component">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less">
.content-component {
  padding: 0 60px 30px 60px;
  position: relative;
  z-index: 1;
  .content {
    max-width: 700px;
    margin: 0 auto;
    padding: 35px 0;
    padding-left: 50px;
    h1 {
      margin: 0 0 1em 0;
      font-size: 2em;
    }

    h2 {
      margin: 45px 0 0.8em 0;
      padding-bottom: 0.7em;
      border-bottom: 1px solid #dddddd;
      font-size: 1.5em;
    }

    p {
      line-height: 1.6em;
      margin: 1.2em 0 -1.2em 0;
      padding-bottom: 1.2em;
      position: relative;
      z-index: 1;
      word-spacing: 0.05em;
    }

    p.tip {
      padding: 12px 24px 12px 30px;
      margin: 2em 0;
      border-left: 4px solid #ff9900;
      background-color: #f8f8f8;
      position: relative;
      border-bottom-right-radius: 2px;
      border-top-right-radius: 2px;
      &::before {
        content: "!";
        background-color: #ff9900;
        position: absolute;
        top: 14px;
        left: -12px;
        color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        text-align: center;
        line-height: 20px;
        font-weight: bold;
        font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial,
          sans-serif;
        font-size: 14px;
      }
    }

    div.demo {
      border: 1px solid #eee;
      border-radius: 2px;
      padding: 25px 35px;
      margin-top: 1em;
      margin-bottom: 40px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      overflow-x: auto;
    }
  }
}
</style>