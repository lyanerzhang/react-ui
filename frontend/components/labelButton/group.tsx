import React from 'react'
import type { ReactNode } from 'react'
import { LabelButtonGroupContext, LabelButtonGroupProps } from './group-context'
import { mergeProps } from '../../utils/with-default-props'

const defaultProps = {
  activeValue: '',
  defaultValue: '',
  multiple: false,
  disabled: false,
  children: null,
}

export default function LabelButtonGroup(p: LabelButtonGroupProps) {
  const props = mergeProps(defaultProps, p)
  return (
    <LabelButtonGroupContext.Provider
      value={{
        activeValue: props.activeValue,
        defaultValue: props.defaultValue,
        multiple: props.multiple,
        disabled: props.disabled,
        children: props.children,
      }}
    >
      {props.children}
    </LabelButtonGroupContext.Provider>
  )
}
