import React from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined } from '@mui/icons-material';


const Container = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
`
const BadgeCount = styled.span`
  color: white;
  font-size  : 11px;
  
`

const BadgeCountWrapper = styled.div`
  width: 15px;
  height: 15px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: 13px;
  padding: 5px;
`

function MyBadge({BadgeContent}) {
  return (
    <Container>
        <BadgeCountWrapper>
          <BadgeCount>{BadgeContent}</BadgeCount>
        </BadgeCountWrapper>
        <ShoppingCartOutlined style={{fontSize: "22px"}}/>
    </Container>
  )
}

export default MyBadge;