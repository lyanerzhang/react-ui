import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { Button as AntButton } from 'antd-mobile'
import type { ReactNode } from 'react'
import classNames from 'classnames'

const classPrefix = `ly-button`

export type ButtonRef = {
  nativeElement: HTMLButtonElement | null
}

export type ButtonProps = {
  type?: 'normal' | 'press'
  mode?: 'dark' | 'light'
  size?: 'small' | 'middle' | 'large'
  block?: boolean
  text?: boolean
  disabled?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void | Promise<void>
  children?: ReactNode
}

const defaultProps: ButtonProps = {
  block: false,
  type: 'normal',
  mode: 'dark',
  size: 'middle',
  text: false
}

export const Button = forwardRef<ButtonRef, ButtonProps>((p, ref) => {
  // ButtonProps: 函数组件|类组件
  // forwardRef：将DOM节点公共给父节点。会创建一个新的组件，当这个组件被使用时， ref 会被传递给指定的子组件
  const nativeButtonRef = useRef<HTMLButtonElement>(null)
  const props = mergeProps(defaultProps, p)
  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current
    },
  }))
  const handleClick = () => {
    console.log(123)
  }

  return (
    {
      props.text ? (
        <span ref={nativeButtonRef}>{props.children}</span>
      ) : (
        <>
          <AntButton
            ref={nativeButtonRef}
            onClick={handleClick}
            className={classNames(classPrefix, {
              [`${classPrefix}-${props.type}`]: props.type,
              [`${classPrefix}-${props.type}-${props.mode}`]: props.mode === 'light',
              [`${classPrefix}-${props.size}`]: props.size,
              [`${classPrefix}-block`]: props.block,
            })}
            >
            <span>{props.children}</span>
          </AntButton>
        </>
      )
    }
  )
})

Button.displayName = 'Button'
