import React from 'react'
import { useNavigate } from 'react-router-dom'
import { List } from 'antd-mobile'

function Menu() {
  const navigate = useNavigate();
  return (
    <>
      <List mode='card'>
        <List.Item onClick={() => { navigate('/') }}>
          Home
        </List.Item>
        <List.Item onClick={() => { navigate('/button') }}>
          Button
        </List.Item>
        <List.Item>3</List.Item>
      </List>
    </>
  )
}

export default Menu
