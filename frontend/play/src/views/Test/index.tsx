import React, { useState } from 'react'
import { CheckList } from 'antd-mobile'

const Test = () => {
  const onChange = (curvalue: string[]) => {
    console.log(value, curvalue)
    setValue(curvalue)
  }
  const [value, setValue] = useState()
  return (
    <>
      <CheckList
        multiple
        defaultValue={['B', 'C']}
        onChange={onChange}
        value={value}
      >
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C">C</CheckList.Item>
      </CheckList>
    </>
  )
}

export default Test
