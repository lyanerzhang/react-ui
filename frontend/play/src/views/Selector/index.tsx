import React, { useState } from 'react'
import Button from '@components/button/index'
import Selector from '@components/selector/index'
const PlaySelector: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div>
      <Button type="normal" size="large" onClick={handleClick}>
        open
      </Button>
      <Selector
        visible={show}
        onMaskClick={() => {
          handleClick()
        }}
      />
    </div>
  )
}

export default PlaySelector
