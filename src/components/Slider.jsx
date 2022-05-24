import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'
import { useState } from 'react'
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${prop => prop.index*-100}vw)

`

const Slide = styled.div`
    min-width: 100vw;
    height: 100%;
    display: flex;

`

const ImageContainer = styled.div`
    flex: 1;
    ${mobile({display:'none'})};
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({display:'none'})};
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.bc};
    
`

const Title = styled.h1`
    width: 100%;
    font-size: 60px;
    font-weight: 800;
   
`

const Desc = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin: 40px 0px;
    width: 100%;
`

const ButtonContainer = styled.div`
    width: 100%;
`

const Button = styled.button`
     width: 120px;
     height: 40px;
     margin-left: 0;
     font-size: 16px;
     font-weight: 500;
     border: none;
     border-radius: 5px;
     cursor: pointer;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.7);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    z-index: 3;
`

function Slider() {

    const[index,setIndex] = useState(0);

    const arrowHandler = (dir)=> {
        if(dir === "left"){
            setIndex( index <= 0 ? 0 : index-1 );
        }
        else{
            setIndex( index >= 2 ? 2 : index+1 );
        }
    }

  return (
    <Container>
        <Arrow direction={'left'} onClick={() => arrowHandler('left')}>
            <ArrowLeft style={{fontSize:"30px"}}/>
        </Arrow>

        <Wrapper index = {index}>
           {
               sliderItems.map(item =>(
                <Slide key={item.id}>
                    <ImageContainer>
                        <Image src={item.img} />
                    </ImageContainer>
                    <InfoContainer bc={item.bc} >
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <ButtonContainer>
                            <Button>SHOW NOW</Button>
                        </ButtonContainer>
                    </InfoContainer>
                </Slide>
               ))
           }
        </Wrapper>

        <Arrow direction={'right'} onClick={() => arrowHandler('right')}>
            <ArrowRight style={{fontSize:"30px"}}/>
        </Arrow>
    </Container>
  )
}

export default Slider