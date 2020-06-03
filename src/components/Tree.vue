<template>
  <ul class="menu-root">
    <li v-for="(item,index) in data" :key="index">
      <h3 v-if="item.head">
        <a
          @click="go(item.href)"
          v-if="item.href"
          :class="$route.path === item.href ? 'active' : ''"
        >{{ch(item.name)}}</a>
        <span v-else>{{ch(item.name)}}</span>
      </h3>
      <Leaf :children="item.children" v-if="item.children"></Leaf>
    </li>
  </ul>
</template>
<script>
import language from "../config/language.js"
import Leaf from "./Leaf.vue";
export default {
  name: "Tree",
  props: ["data"],
  components: {
    Leaf
  },
  methods: {
    go(href) {
      this.$router.push(href);
    },
    ch(str) {
      str = str.replace(/\.md$/, "");
      return language["sidebar"][str] || str;
    }
  }
};
</script>