import React from 'react'
import type { ReactNode } from 'react'
import { LabelButtonGroupContext, LabelButtonGroupProps } from './group-context'
import { mergeProps } from '../../utils/with-default-props'

const defaultProps = {
  defaultValue: '',
  onChange: () => {},
  multiple: false,
  disabled: false,
  children: null,
}

export default function LabelButtonGroup(p: LabelButtonGroupProps) {
  const props = mergeProps(defaultProps, p)
  // 如何判断是否有activeValue,activeValue = useState() 相当于没有定义，
  return (
    <LabelButtonGroupContext.Provider
      value={{
        activeValue: props.activeValue,
        defaultValue: props.defaultValue,
        onChange: props.onChange,
        multiple: props.multiple,
        disabled: props.disabled,
        children: props.children,
      }}
    >
      {props.children}
    </LabelButtonGroupContext.Provider>
  )
}
