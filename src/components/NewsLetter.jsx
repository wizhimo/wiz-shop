import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #f5d6d6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    font-size: 24px;
    margin: 20px 0px;
`

const SearchContainer = styled.div`
    width: 50%;
    height: 40px;
    border: 1px solid lightgray;
    display: flex;
`

const Input = styled.input`
    flex: 8;
    padding: 0px 10px;
    border: none;
    outline: none;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

function NewsLetter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get Timely Updates From Your Favorite Products</Desc>
        <SearchContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send/>
            </Button>
        </SearchContainer>
    </Container>
  )
}

export default NewsLetter