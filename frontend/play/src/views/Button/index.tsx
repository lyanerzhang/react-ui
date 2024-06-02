import React from 'react'
import Button from '@components/button/index'
const PlayButton: React.FC = () => {
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
    </>
  )
}

export default PlayButton
