import React, { useState } from 'react'
import Button from '@components/button/index'
import Selector from '@components/selector/index'
const PlaySelector: React.FC = () => {
  const [show, setShow] = useState(false)
  const [multiple, setMultiple] = useState(true)
  const [source, setSource] = useState([
    { label: '张三', value: '1', disabled: true },
    { label: '李四', value: '2' },
    { label: '王二麻子', value: '3' },
    { label: '楚源', value: '4' },
  ])
  type ValueType = string | number | Array<unknown>
  const [value, setValue] = useState<ValueType>([])
  return (
    <div>
      <Button
        type="normal"
        size="large"
        onClick={() => {
          if (!(value && Array.isArray(value))) {
            setValue([])
          }
          setMultiple(true)
          setShow(true)
        }}
      >
        多选
      </Button>
      <Button
        type="normal"
        size="large"
        onClick={() => {
          if (!(value && !Array.isArray(value))) {
            setValue('')
          }
          setMultiple(false)
          setShow(true)
        }}
      >
        单选
      </Button>
      <div>选中的值：{JSON.stringify(value)}</div>
      <Selector
        title="这里是标题——多选"
        visible={show}
        source={source}
        value={value}
        multiple={multiple}
        onConfirm={(value: ValueType) => {
          console.log(value)
          setValue(value)
          setShow(false)
        }}
        onMaskClick={() => {
          setShow(false)
        }}
      />
    </div>
  )
}

export default PlaySelector
