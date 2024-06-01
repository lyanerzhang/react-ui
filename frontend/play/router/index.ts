import React, { Suspense } from 'react'

import Menu from '@/views/Menu/index'
import PlayButton from '@/views/Button/index'

const routes = [
  {
    path: '/',
    component: Menu
  },
  {
    path: '/button',
    component: PlayButton
  }
]

export default routes;