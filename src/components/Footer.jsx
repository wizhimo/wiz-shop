import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 10px;
`

const Left = styled.div`
    flex: 1;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 16px;
`

const SocialContainer = styled.div`
    display: flex;
`

const Social = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.bc};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h2`
    
`

const Links = styled.ul`
    margin: 20px 0px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
`

const Link = styled.li`
    width: 50%;
    margin: 5px 0px;
    cursor: pointer;
    font-weight: 500;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>WizShop</Logo>
            <Desc>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </Desc>
            <SocialContainer>

                <Social bc={"#1359d2"}>
                    <Facebook/>
                </Social>
                <Social bc={"#d33797"}>
                    <Instagram/>
                </Social>
                <Social bc={"#94bbff"}>
                    <Twitter/>
                </Social>
                <Social bc={"#d82929"}>
                    <Pinterest/>
                </Social>
                
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <Links>
                <Link>Home</Link>
                <Link>Man Fashion</Link>
                <Link>Accesories</Link>
                <Link>My Account</Link>
                <Link>Wishlisht</Link>
                <Link>Cart</Link>
                <Link>Woman Fashion</Link>
                <Link>Wishlisht</Link>
                <Link>Order Tracking</Link>
                <Link>Terms</Link>
            </Links>
        </Center>
        <Right>right</Right>
    </Container>
  )
}

export default Footer