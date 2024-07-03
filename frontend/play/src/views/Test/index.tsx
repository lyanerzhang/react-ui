import React, { useState, useEffect } from 'react'
import { CheckList } from 'antd-mobile'

const Test = () => {
  // document.getElementById('A')?.addEventListener('click', e => {
  //   console.log('click A')
  //   // true 表示捕获阶段，false 表示冒泡阶段 默认是冒泡阶段false
  // })
  document.getElementById('B')?.addEventListener('click', e => {
    // e.stopPropagation()
    console.log('click B')
    // true 表示捕获阶段，false 表示冒泡阶段 默认是冒泡阶段false
  })

  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log('count3: ', count);
  },[count])
  return (
    <div id="xxx">
      <div
        id="A"
        onClick={event => {
          console.log('click #A')
        }}
      >
        #A
      </div>
      <div
        id="B"
        // onClick={event => {
        //   console.log('click #B')
        // }}
      >
        #B
      </div>
      <button onClick={()=>{
        setCount(c=> c + 1);
        console.log('count1: ', count);
        setCount(c=> c + 2);
        console.log('count2: ', count);
      }}>
        {count}
      </button>
    </div>
  )
}

export default Test
