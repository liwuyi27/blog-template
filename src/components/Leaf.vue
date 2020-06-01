<template>
    <ul>
        <li v-for="(item,index) in children" :key="index">
            <a v-if="item.href" @click="go(item.href)" :class="$route.path === item.href ? 'active' : ''">{{item.name}}</a>
            <span v-else>{{item.name}}</span>
            <Leaf :children="item.children" v-if="item.children"></Leaf>
        </li> 
    </ul>
</template>
<script>
export default {
    name:"Leaf",
    props:["children"],
  methods:{
      go(href){
          this.$router.push(href)
      }
  }
}
</script>