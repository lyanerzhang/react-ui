import { IConfig } from 'dumi'
import { navs } from './navs'
import { menus } from './menus'

const config: IConfig = {
  mode: 'site',
  title: 'LY Mobile',
  favicon:
    'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
  navs,
  menus,
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  hash: true,
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  alias: {
    'ly-mobile/es': process.cwd() + '/src',
    'demos': process.cwd() + '/src/demos/index.ts',
  },
  themeConfig: {
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
}
export default config