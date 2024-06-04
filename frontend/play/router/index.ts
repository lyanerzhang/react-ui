import React, { Suspense } from 'react'

import Menu from '@/views/Menu/index'
import PlayButton from '@/views/Button/index'
import PlaySelector from '@/views/Selector/index'
import PlayTest from '@/views/Test/index'

const routes = [
  {
    path: '/',
    component: Menu,
  },
  {
    path: '/button',
    component: PlayButton,
  },
  {
    path: '/selector',
    component: PlaySelector,
  },
  {
    path: '/test',
    component: PlayTest,
  },
]

export default routes
