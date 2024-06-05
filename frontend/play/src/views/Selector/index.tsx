import React, { useState } from 'react'
import Button from '@components/button/index'
import Selector from '@components/selector/index'
const PlaySelector: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  const [source, setSource] = useState([
    { label: '张三', value: '1' },
    { label: '李四', value: '2' },
    { label: '王二麻子', value: '3' },
  ])
  const [value, setValue] = useState([])
  return (
    <div>
      <Button type="normal" size="large" onClick={handleClick}>
        open
      </Button>
      <Selector
        title="这里是标题——多选"
        visible={show}
        source={source}
        value={value}
        multiple={true}
        onConfirm={(value: unknown) => {
          console.log(value)
        }}
        onMaskClick={() => {
          handleClick()
        }}
      />
    </div>
  )
}

export default PlaySelector
