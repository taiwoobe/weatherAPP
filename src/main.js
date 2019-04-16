import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

Vue.config.productionTip = false

Vue.use(axios);

// Custom Directives
Vue.directive("background", function(el, binding, vnode) {

  // el.style.backgroundColor = "#" + Math.random().toString().slice(2,8);

  if(binding.value === "Monday") {
    el.style.backgroundColor = "#fcc14d";
  } else if (binding.value === "Tuesday") {
    el.style.backgroundColor = "#9fb7cf";
  } else if (binding.value === "Wednesday") {
    el.style.backgroundColor = "#a1e974";
  } else if (binding.value === "Thursday") {
    el.style.backgroundColor = "#fc4d4d";
  } else if (binding.value === "Friday") {
    el.style.backgroundColor = "#9c8715";
  } else if (binding.value === "Saturday") {
    el.style.backgroundColor = "#3184a5";
  }
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
