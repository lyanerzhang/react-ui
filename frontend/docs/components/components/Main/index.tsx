import React, { useEffect, useState, useRef } from 'react'
import { Button, Card } from 'antd'
import Lottie from 'react-lottie'
import { useSize } from 'ahooks'
import { RightOutlined } from '@ant-design/icons'
import styles from './index.local.less'
import { useTrans } from '../../../hooks/useTrans'

export default () => {
  const [isWidthScreen, setIsWidthScreen] = useState(true)
  const [startAnimation, setStartAnimation] = useState([
    false,
    false,
    false,
    false,
  ])
  const trans = useTrans()

  useEffect(() => {
    setIsWidthScreen(screen?.width > 450)
    /** 绑定触发动画的事件，因为是mouseenter触发，因此无法进行通过事件委托绑定 */
    startAnimation.forEach((item, index) => {
      document
        .querySelector(`#my_lottie_${index}`)
        ?.addEventListener('mouseenter', () => {
          setStartAnimation(pre =>
            pre.map((i, idx) => (index === idx ? true : i))
          )
        })
    })
  }, [])

  const containerRef = useRef<HTMLDivElement>(null)
  const containerSize = useSize(containerRef)

  useEffect(() => {
    if (!containerSize?.width) return

    if (containerSize?.width > 450) {
      setIsWidthScreen(true)
    } else {
      setIsWidthScreen(false)
    }
  }, [containerSize?.width])

  return (
    <div>
      <div>
        Home Page
        {/* <MainSection isWidthScreen={isWidthScreen} /> */}
      </div>
    </div>
  )
}
