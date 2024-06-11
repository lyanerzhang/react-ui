import React from 'react'
import { useNavigate } from 'react-router-dom'
import { List } from 'antd-mobile'

function Menu() {
  const navigate = useNavigate()
  return (
    <>
      <List mode="card">
        <List.Item
          onClick={() => {
            navigate('/')
          }}
        >
          Home
        </List.Item>
        <List.Item
          onClick={() => {
            navigate('/button')
          }}
        >
          Button
        </List.Item>
        <List.Item
          onClick={() => {
            navigate('/selector')
          }}
        >
          Selector
        </List.Item>
        <List.Item
          onClick={() => {
            navigate('/labelbutton')
          }}
        >
          LabelButton
        </List.Item>
        <List.Item
          onClick={() => {
            navigate('/test')
          }}
        >
          Test
        </List.Item>
      </List>
    </>
  )
}

export default Menu
