/*
 * @Description: 
 * @Author: luzhonglai
 * @Date: 2024-03-26 11:54:09
 * @LastEditors: luzhonglai
 * @LastEditTime: 2024-03-26 11:55:30
 * @FilePath: /webpack-demo/env.d.ts
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}