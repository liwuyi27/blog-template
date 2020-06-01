<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    <Content>
      <HelloWorld></HelloWorld>
      <router-view></router-view>
    </Content>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
// import components from './config/components.js';
import HelloWorld from './blogComponents/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Content,
    HelloWorld,
  }
}
</script>
