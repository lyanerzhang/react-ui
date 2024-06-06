import React, { useState, useRef } from 'react'
import type { MouseEventHandler, ReactNode } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { Popup, Radio, Checkbox, List, Button, Divider } from 'antd-mobile'
import classNames from 'classnames'

const classPrefix = `ly-selector`

interface Source {
  label: string
  value: string | number
  disabled?: boolean
  checked?: boolean
}
export type SelectorProps = {
  visible: boolean
  title: string
  multiple: boolean
  value: Array<string | number> | string | number | undefined
  source: Array<Source>
  onConfirm?: (res: Array<string | number>) => void
  children?: ReactNode
}

const defaultProps: SelectorProps = {
  visible: false,
  title: '',
  multiple: false,
  value: '',
  source: [],
  onConfirm: () => {},
  children: null,
}

type ValueType = Array<string | number> | string | number | undefined
export default function Selector(p: SelectorProps) {
  const props = mergeProps(defaultProps, p)
  const checkboxRefs = props.source.map(() => useRef<HTMLButtonElement>(null))
  const [defaultValue, setDefaultValue] = useState(
    props.value as Array<string | number>,
  )
  const [value, setValue] = useState<ValueType>(props.value)
  return (
    <Popup visible={props.visible} onMaskClick={props.onMaskClick}>
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-title`]: true,
        })}
      >
        {props.title}
      </div>
      <div className={classPrefix + '-content'}>
        {props.multiple ? (
          <>
            <Checkbox.Group
              onChange={(values: (string | number)[][]): void => {
                setValue(values)
              }}
            >
              <List>
                {props.source.map((item, index) => (
                  <List.Item
                    prefix={
                      <div onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                          block
                          value={item.value}
                          ref={checkboxRefs[index]}
                        ></Checkbox>
                      </div>
                    }
                    key={item.value}
                    arrow={false}
                    className={classPrefix + '-items'}
                    onClick={() => {
                      checkboxRefs[index].current?.toggle()
                    }}
                  >
                    {item.label}
                  </List.Item>
                ))}
              </List>
            </Checkbox.Group>
            <Button
              block
              color="primary"
              size="middle"
              onClick={() => {
                props.onConfirm && props.onConfirm(value)
              }}
            >
              确 定
            </Button>
          </>
        ) : (
          <>
            <Radio.Group value={value}>
              <List>
                {props.source.map((item, index) => (
                  <List.Item
                    key={item.value}
                    arrow={false}
                    onClick={() => {
                      item.checked = true
                      console.log(item)
                      setValue(item.value)
                      props.onConfirm && props.onConfirm(value)
                    }}
                  >
                    <Radio value={item.value}>{item.label}</Radio>
                  </List.Item>
                ))}
              </List>
            </Radio.Group>
          </>
        )}
      </div>
    </Popup>
  )
}
