/*
 * @Description: 
 * @Author: luzhonglai
 * @Date: 2024-03-26 11:19:35
 * @LastEditors: luzhonglai
 * @LastEditTime: 2024-03-27 17:07:05
 * @FilePath: /webpack-demo/src/main.ts
 */

import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app');