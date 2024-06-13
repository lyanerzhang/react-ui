import React, {
  forwardRef,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react'
import type { ReactNode } from 'react'
import { LabelButtonGroupContext, LabelButtonGroupProps } from './group-context'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'

export type LabelButtonRef = {
  check: () => void
  uncheck: () => void
  toggle: () => void
}
export type LabelButtonProps = {
  title: string
  key: string | number
  onClick?: (value: string) => void
  children?: ReactNode
}

export type Value = string | number | Array<string | number>[]

const defaultProps = {
  title: '',
  value: '',
}
const classPrefix = `ly-label-button`

export const LabelButton = forwardRef<LabelButtonRef, LabelButtonProps>(
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
    const groupContext = useContext<LabelButtonGroupProps>(
      LabelButtonGroupContext,
    )
    const { activeValue, defaultValue, multiple, disabled, children } =
      groupContext
    // activeValue：设置组件激活标签，通过 state 来管理，会随着用户的交互而改变
    // defaultValue: 设置组件挂载时的默认激活标签，不会随着用户的交互而改变，除非页面刷新
    // console.log(groupContext, defaultValue, props.value)
    const currentValue = useRef<Value>()
    currentValue.flag = true
    useEffect(() => {
      if (currentValue.flag) {
        if (multiple) {
          console.log('multiple')
        } else {
          // console.log('single', currentValue, children, activeValue)
          if (defaultValue) {
            currentValue.current = defaultValue
          } else {
            // 默认取第一个child的value作为默认值
            if (children) {
              // console.log('xxx')
              currentValue.current = children[0].props.value
              // console.log('xxx', currentValue.current, children[0].props.value)
            }
          }
        }
        console.log('只在页面挂载时执行', currentValue.current)
        currentValue.flag = false
      } else {
        console.log('只在 activeValue 变化时执行')
        currentValue.current = activeValue
      }
      // renderSelectedClass()
    }, [activeValue])
    // useEffect(() => {
    //   currentValue.current = activeValue
    //   console.log('只在 activeValue  变化时执行')
    // }, [activeValue])
    const handleClick = () => {
      if (props.onClick) {
        props.onClick(props.value)
      }
    }
    const renderSelectedClass = () => {
      console.log('render--', currentValue.current, props.value)
      if (currentValue.current === props.value) {
        return `${classPrefix}__active`
      } else {
        return `${classPrefix}__default`
      }
    }
    return (
      <>
        <div className={classNames(classPrefix)} onClick={handleClick}>
          {currentValue.current}
          {props.value}
          <div
            className={classNames(`${classPrefix}__content`, {
              [`${classPrefix}__active`]: currentValue.current === props.value,
              [`${classPrefix}__default`]: currentValue.current !== props.value,
            })}
          >
            {props.children}
          </div>
        </div>
      </>
    )
  },
)

LabelButton.displayName = 'LabelButton'

export default LabelButton
