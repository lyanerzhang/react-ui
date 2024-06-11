import React, { Suspense } from 'react'

import Menu from '@/views/Menu/index'
import PlayButton from '@/views/Button/index'
import PlaySelector from '@/views/Selector/index'
import PlayLabelButton from '@/views/LabelButton/index'
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
    path: '/labelbutton',
    component: PlayLabelButton,
  },
  {
    path: '/test',
    component: PlayTest,
  },
]

export default routes
