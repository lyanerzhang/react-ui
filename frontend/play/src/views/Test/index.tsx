import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react'
// const PlayButton: React.FC = () => {
export const TextInputWithFocusButton: React.FC = () => {
  const ref = useRef(0)
  useEffect(() => {
    console.log('组件渲染')
  })
  const handleClick = () => {
    ref.current += 1
    console.log(ref.current)
  }
  return <button onClick={handleClick}>点击</button>
}

export default TextInputWithFocusButton
