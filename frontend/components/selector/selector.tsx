import React, { useState } from 'react'
import type { MouseEventHandler, ReactNode } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { Popup } from 'antd-mobile'
import classNames from 'classnames'

const classPrefix = `ly-selector`

export type SelectorProps = {
  visible: boolean
  children?: ReactNode
}

const defaultProps: SelectorProps = {
  visible: false,
  children: null,
}
export default function Selector(p: SelectorProps) {
  const props = mergeProps(defaultProps, p)
  return <Popup visible={props.visible} onMaskClick={props.onMaskClick}>
1234564321
  </Popup>
}
