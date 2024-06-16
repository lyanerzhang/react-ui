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
  disabled?: boolean
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
    const {
      activeValue,
      defaultValue,
      onChange,
      multiple,
      disabled,
      children,
    } = groupContext
    // activeValue：设置组件激活标签，通过 state 来管理，会随着用户的交互而改变
    // defaultValue: 设置组件挂载时的默认激活标签，不会随着用户的交互而改变，除非页面刷新~~
    const [currentValue, setCurrentValue] = useState<Value>()
    const multipleClick = useRef(null)
    useEffect(() => {
      if (multiple) {
        if (!Array.isArray(activeValue)) {
          console.error('请输入正确格式的activeValue')
          return
        }
        if (!Array.isArray(defaultValue)) {
          console.error('请输入正确格式的defaultValue')
          return
        }
        console.log('multipleClick.current', multipleClick.current)
        if (multipleClick.current) {
          setCurrentValue(activeValue)
        } else {
          if (activeValue.length) {
            setCurrentValue(activeValue)
          } else if (defaultValue.length) {
            console.log('取1')
            setCurrentValue(defaultValue)
          } else {
            console.log('取')
            // 默认取第一个child的value作为默认值33
            if (children) {
              setCurrentValue([children[0].props.value])
            }
          }
        }
      } else {
        if (activeValue) {
          setCurrentValue(activeValue)
        } else if (defaultValue) {
          setCurrentValue(defaultValue)
        } else {
          // 默认取第一个child的value作为默认值33
          if (children) {
            setCurrentValue(children[0].props.value)
          }
        }
      }
      console.log('只在页面挂载时执行', activeValue)
      // console.log('activeValue', activeValue)
    }, [activeValue, defaultValue, children, multiple])
    const handleClick = () => {
      if (disabled || props.disabled) {
        return
      }
      if (props.onClick) {
        if (multiple) {
          console.log(currentValue, children)
          // 当点击某一个时，触发父组件的onChange事件
          props.onClick(props.value)
          onChange(currentValue)
          multipleClick.current = true
        } else {
          props.onClick(props.value)
          onChange(props.value)
        }
      }
    }

    return (
      <>
        <div className={classNames(classPrefix)} onClick={handleClick}>
          <div
            className={classNames(`${classPrefix}__content`, {
              [`${classPrefix}__active`]:
                !disabled &&
                !props.disabled &&
                (currentValue === props.value ||
                  currentValue?.includes(props.value)),
              [`${classPrefix}__default`]:
                !disabled &&
                !props.disabled &&
                currentValue !== props.value &&
                !currentValue?.includes(props.value),
              [`${classPrefix}__disabled`]: !!disabled || props.disabled,
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
