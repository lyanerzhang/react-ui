import React from 'react'
import type { ReactNode } from 'react'
import { LabelButtonGroupContext } from './group-context'
import { mergeProps } from '../../utils/with-default-props'

export type LabelButtonGroupProps = {
  value: Array<string | number>[] | string | number | undefined
  disabled: boolean
  children?: ReactNode
}

const defaultProps = {
  value: [],
  disabled: false,
}

export default function LabelButtonGroup(p: LabelButtonGroupProps) {
  const props = mergeProps(defaultProps, p)
  return (
    <LabelButtonGroupContext.Provider
      value={{
        value: props.value,
        disabled: props.disabled,
      }}
    >
      {props.children}
    </LabelButtonGroupContext.Provider>
  )
}
