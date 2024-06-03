import React, { Suspense } from 'react'

import Menu from '@/views/Menu/index'
import PlayButton from '@/views/Button/index'
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
    path: '/test',
    component: PlayTest,
  },
]

export default routes
