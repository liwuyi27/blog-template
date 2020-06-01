import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import routes from './config/routes.js'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import './less/page.less';

import components from './config/components.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ViewUI);

const router = new VueRouter({
  routes
});

let keys = Object.keys(components);
for(let i = 0; i < keys.length; i++){
  Vue.component(keys[i], components[keys[i]]);
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
