import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './lang/index.js';
// console.log(i18n)

import {
  Message,
  Button,
  Form,
  FormItem,
  Input,
  Dialog,
  Select,
  Option,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.prototype.$message = Message

import Web3 from "web3";
import Web3Utils from "web3-utils";

// Vue.use(new Web3())
Vue.use(new Web3)
Vue.use(Web3Utils)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
