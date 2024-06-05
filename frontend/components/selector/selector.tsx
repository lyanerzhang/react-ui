import React, { useState, useRef } from 'react'
import type { MouseEventHandler, ReactNode } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { Popup, Radio, Checkbox, List, Button } from 'antd-mobile'
import classNames from 'classnames'

const classPrefix = `ly-selector`

interface Source {
  label: string
  value: string | number
  disabled?: boolean
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
export default function Selector(p: SelectorProps) {
  const checkboxRef = useRef<HTMLButtonElement>(null)
  const props = mergeProps(defaultProps, p)
  const [defaultValue, setDefaultValue] = useState(
    props.value as Array<string | number>,
  )
  const [value, setValue] = useState(props.value as Array<string | number>)
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
            <List>
              <Checkbox.Group defaultValue={defaultValue} value={value}>
                {props.source.map((item) => (
                  <List.Item
                    key={item.value}
                    className={classPrefix + '-item'}
                    onClick={() => {
                      checkboxRef.current?.toggle()
                    }}
                  >
                    <Checkbox block value={item.value}>
                      {item.label}
                    </Checkbox>
                  </List.Item>
                ))}
              </Checkbox.Group>
            </List>
            <Button
              block
              color="primary"
              size="middle"
              onClick={() => {
                props.onConfirm && props.onConfirm([22])
              }}
            >
              确 定
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </Popup>
  )
}
