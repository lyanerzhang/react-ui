import React, { forwardRef, useRef } from 'react';
import { mergeProps } from '../../utils/with-default-props';
import type { ReactNode } from 'react';

const classPrefix = `ly-button`

export type ButtonRef = {
  nativeElement: HTMLButtonElement | null
}

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean | 'auto'
  loadingText?: string
  loadingIcon?: ReactNode
  disabled?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void>
  type?: 'submit' | 'reset' | 'button'
  shape?: 'default' | 'rounded' | 'rectangular'
  children?: ReactNode
}

const defaultProps: ButtonProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  type: 'button',
  shape: 'default',
  size: 'middle',
};

export const Button = forwardRef<ButtonProps, ButtonRef>((p, ref) => {
  // ButtonProps: 函数组件|类组件
  // forwardRef：将DOM节点公共给父节点。会创建一个新的组件，当这个组件被使用时， ref 会被传递给指定的子组件
  const nativeButtonRef = useRef<HTMLButtonElement>(null)
  const props = mergeProps(defaultProps, p)
  const handleClick = () => {
    console.log(123)
  }

  return <button
    ref={nativeButtonRef}
    type={props.type}
    onClick={handleClick}>
    <span>{props.children}</span>
  </button>
})
