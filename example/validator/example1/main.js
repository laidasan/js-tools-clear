/**
 * @author samura
 * @description dev js , you can try your tools here
*/


/**
 * @funciton 
 * @description imageReader
*/

import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
// 使用 vuelidate 套件 , 就是看到 vue 中使用 
// validations() { return {} }  or validations: { } 功能的源頭套件

new Vue({
  render: (h) => h(App)
}).$mount('#app')
