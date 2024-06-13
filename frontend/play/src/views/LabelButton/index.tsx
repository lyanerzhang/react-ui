import React, { useState } from 'react'
import LabelButtonGroup from '@components/labelButton/group'
import LabelButton from '@components/labelButton/index'
const PlayLabelButton: React.FC = () => {
  const [defaultValue, setDefaultValue] = useState('1')
  const [activeValue, setActiveValue] = useState('')
  const handleClick = (value: string) => {
    console.log('get value', value)
    setActiveValue(value)
  }
  return (
    <LabelButtonGroup activeValue={activeValue}>
      <LabelButton value="1" onClick={handleClick}>
        拿铁
      </LabelButton>
      <LabelButton value="2" onClick={handleClick}>
        奶茶
      </LabelButton>
    </LabelButtonGroup>
  )
}
export default PlayLabelButton
