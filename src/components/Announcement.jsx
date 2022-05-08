import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: white;
`

function Announcement() {
  return (
    <Container>
        <Title>Super Deal! Free Shipping On Orders Over $50</Title>
    </Container>
  )
}

export default Announcement