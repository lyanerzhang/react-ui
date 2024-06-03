import React, { useRef } from 'react'
import Button from '@components/button/index'
const PlayButton: React.FC = () => {
  const buttonRef = useRef(null)
  const handleClick = () => {
    console.log('click')
  }
  return (
    <>
      <p>
        <Button type="normal" size="large">
          large
        </Button>
        <Button type="normal">normal</Button>
        <Button type="normal" size="small">
          small
        </Button>
      </p>
      <p>
        <Button type="normal" mode="light" size="large">
          large
        </Button>
        <Button type="normal" mode="light">
          normal
        </Button>
        <Button type="normal" mode="light" size="small">
          small
        </Button>
      </p>
      <Button type="press">press</Button>
      <Button type="press" mode="light">
        dark
      </Button>
      <p>
        <Button text ref={buttonRef} onClick={handleClick}>
          文字按钮
        </Button>
      </p>
    </>
  )
}

export default PlayButton
