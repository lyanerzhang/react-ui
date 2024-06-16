import React, { useState } from 'react'
import LabelButtonGroup from '@components/labelButton/group'
import LabelButton from '@components/labelButton/index'
const PlayLabelButton: React.FC = () => {
  const [defaultValue, setDefaultValue] = useState(['1'])
  const [activeValue, setActiveValue] = useState([])
  const handleOnChange = (value: string) => {
    console.log('onChange', value)
    setActiveValue(value)
  }
  return (
    <LabelButtonGroup
      defaultValue={defaultValue}
      activeValue={activeValue}
      onChange={handleOnChange}
      multiple={true}
    >
      <LabelButton value="1">拿铁</LabelButton>
      <LabelButton value="2">奶茶</LabelButton>
      {/* <LabelButton value="3" onClick={handleClick}>
        果汁
      </LabelButton> */}
      {/* <LabelButton value="4" onClick={handleClick}>
        豆浆
      </LabelButton> */}
    </LabelButtonGroup>
  )
}
export default PlayLabelButton
