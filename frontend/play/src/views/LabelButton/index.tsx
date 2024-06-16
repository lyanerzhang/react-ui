import React, { useState } from 'react'
import LabelButtonGroup from '@components/labelButton/group'
import LabelButton from '@components/labelButton/index'
const PlayLabelButton: React.FC = () => {
  const [defaultValue, setDefaultValue] = useState(['1'])
  const [activeValue, setActiveValue] = useState([])
  const handleClick = (value: string) => {
    if (Array.isArray(activeValue)) {
      if (activeValue.length) {
        console.log('seeet acti')
        if (activeValue.includes(value)) {
          setActiveValue(activeValue.filter((item) => item !== value))
        } else {
          setActiveValue([...activeValue, value])
        }
      } else if (defaultValue.length) {
        console.log('seeet dd')
        if (defaultValue.includes(value)) {
          setDefaultValue(defaultValue.filter((item) => item !== value))
          setActiveValue(defaultValue.filter((item) => item !== value))
        } else {
          setActiveValue([...defaultValue, value])
        }
      } else {
        console.log('seeet')
        setActiveValue([value])
      }
    } else {
      setActiveValue(value)
    }
  }
  const handleOnChange = (value: string) => {
    console.log('onChange', value)
    setDefaultValue(value)
  }
  return (
    <LabelButtonGroup
      defaultValue={defaultValue}
      activeValue={activeValue}
      multiple={true}
      onChange={handleOnChange}
    >
      <LabelButton value="1" onClick={handleClick}>
        拿铁
      </LabelButton>
      <LabelButton value="2" onClick={handleClick}>
        奶茶
      </LabelButton>
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
