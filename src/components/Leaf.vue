<template>
  <ul>
    <li v-for="(item,index) in children" :key="index">
      <a
        v-if="item.href"
        @click="go(item.href)"
        :class="$route.path === item.href ? 'active' : ''"
      >{{ch(item.name)}}</a>
      <span v-else>{{(ch(item.name))}}</span>
      <Leaf :children="item.children" v-if="item.children"></Leaf>
    </li>
  </ul>
</template>
<script>
import language from "../config/language.js"
export default {
  name: "Leaf",
  props: ["children"],
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