import styled from 'styled-components'
import React from 'react'
import {mobile} from '../responsive'


const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
  ${mobile({height:'50vh', flex:'none'})};
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0,0,0,0.3);

    
`

const Title = styled.h1`
    color: white;
    letter-spacing: 2px;
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
`

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`

function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOW NOW</Button>
        </Info>     
    </Container>
  )
}

export default CategoryItem