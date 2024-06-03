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
  //   const inputEl = useRef(null)
  const [value, setValue] = useState('')
  //   useEffect(() => {
  //     setValue(inputEl?.current.value)
  //   }, [inputEl])
  const inputEl = useCallback((node) => {
    if (node !== null) {
      console.log('TCL: TextInputWithFocusButton -> node.value', node.value)
      setValue(node.value)
    }
  }, [])

  const onButtonClick = () => {
    console.log('input', inputEl.current.value)
    setValue(inputEl?.current.value)
  }
  return (
    <>
      <div>
        子组件: <TextInput ref={inputEl}></TextInput>
      </div>
      <div>
        父组件: <input type="text" value={value} onChange={() => {}} />
      </div>
      <button onClick={onButtonClick}>获得值</button>
    </>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
const TextInput = forwardRef((props, ref) => {
  const [value, setValue] = useState('')
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    value: inputRef.current.value,
  }))
  const changeValue = (e: any) => {
    setValue(e.target.value)
  }
  return <input ref={inputRef} value={value} onChange={changeValue}></input>
})

TextInput.displayName = 'TextInput'

export default TextInputWithFocusButton
