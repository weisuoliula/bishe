import Vue from 'vue'
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'
 import router from "./router"

 
import QuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
Vue.use(QuillEditor)

// import store from './store'
// import "@common/components"
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')