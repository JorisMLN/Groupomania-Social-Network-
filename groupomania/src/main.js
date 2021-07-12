import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vueditor from 'vueditor';
import 'vueditor/dist/style/vueditor.min.css'

let config = {
  toolbar: [
    'picture'
  ],
  fontName: [
    {val: 'arial black'}, 
  ],
  fontSize: ['12px'],
  uploadUrl: 'http://localhost:3000/api/user/gif/'
};

Vue.use(Vueditor, config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
