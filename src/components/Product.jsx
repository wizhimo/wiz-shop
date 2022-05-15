import { Favorite, Search, ShoppingCart } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &:hover ${Info}{
      opacity: 1;
  }
`

const Circle = styled.div`
    width: 220px;
    height: 220px;
    background-color: #e6e6e6;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
`

const Image = styled.img`
    width: 180px;
    z-index: 2;
`


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 5px;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover{
        transform: scale(1.1);
    }

`

function Product({item}) {
  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCart/>
            </Icon>
            <Icon>
                <Search/>
            </Icon>
            <Icon>
                <Favorite/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product