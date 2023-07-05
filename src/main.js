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
  DropdownItem,
  Collapse,
  CollapseItem,
  Table,
  TableColumn
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
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$message = Message

import Web3 from "web3";
import Web3Utils from "web3-utils";


import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/css/swiper.css"
Vue.use(VueAwesomeSwiper)



const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();


// Vue.use(new Web3())
Vue.use(new Web3)
Vue.use(Web3Utils)

import AOS from 'aos/dist/aos.js'
import 'aos/dist/aos.css'
Vue.use(AOS)


// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
// 引入柱状图图表，图表后缀都为 Chart
// import { BarChart } from 'echarts/charts';
// // 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent
// } from 'echarts/components';
// // 标签自动布局、全局过渡动画等特性
// import { LabelLayout, UniversalTransition } from 'echarts/features';
// // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
// import { CanvasRenderer } from 'echarts/renderers';
// // 注册必须的组件
// echarts.use([
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent,
//   BarChart,
//   LabelLayout,
//   UniversalTransition,
//   CanvasRenderer
// ]);
// var myChart = echarts.init(document.getElementById('main'));
// myChart.setOption({
//   // ...
// });

Vue.prototype.$bus = new Vue
Vue.config.productionTip = false
import MetaMaskSDK from "@metamask/sdk"
Vue.use(new MetaMaskSDK)
// export const instantiateSdk = () => {
//   new MetaMaskSDK();
// };

new Vue({
  router,
  i18n,
  render: h => h(App),
  mounted() {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      // disable: 'mobile'
    });
  },
}).$mount('#app')
