import { components } from './components'

export const menus = {
  '/': [
    {
      title: 'Home',
      path: 'index',
    },
  ],
  '/zh-CN': [
    {
      title: '首页',
      path: 'index',
    },
  ],
  '/components': [
    {
      title: 'Common',
      children: components.common,
    },
  ],
  '/zh-CN/components': [
    {
      title: '通用',
      children: ["/components/button/index.zh-CN.md"],
    },
  ]
}
