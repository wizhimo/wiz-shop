import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {mobile} from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    text-align: center;
    font-weight: 200;
    margin-bottom: 20px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopButton = styled.button`
    padding: 10px 15px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${props => props.type === "filled" && "black"};
    color: ${props => props.type === "filled" && "white"};
    border: ${props => props.type === "filled" ? "none" : "1px solid lightgray"};
`

const TopTexts = styled.div`
    ${mobile({display :'none'})}
`

const TopText = styled.a`
    margin: 0px 10px;
    cursor: pointer;
    text-decoration: underline;
`

const Bottom = styled.div`
    display: flex;
    ${mobile({flexDirection :'column'})}
`

const ProductContainer =styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    
`

const Product = styled.div`
    display: flex;
    margin: 30px 0px;
    ${mobile({flexDirection :'column'})}
`

const Image = styled.img`
    width: 250px;
    ${mobile({width :'100%'})}
`

const ProductDetails = styled.div`
    flex: 1;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({padding :'0px', justifyContent:'space-between'})}
`

const ProductName = styled.span`
    ${mobile({margin: '10px 0px'})}
`

const ProductId = styled.span`
    ${mobile({margin: '10px 0px'})}
`

const Color = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};
    ${mobile({margin: '10px 0px'})}

`

const ProductSize = styled.span`
    ${mobile({margin: '10px 0px'})}
`

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const AmountContainer = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
`

const Amount = styled.span`
    font-size: 20px;
    margin: 0px 5px;
    font-weight: 500;
    ${mobile({margin:'0px 10px', fontSize:'24px'})};
`

const Price = styled.span`
    margin: 10px;
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    border: none;
    height: 1px;
    background-color: #dfdfdf;
`

const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 20px 0px;
    height: 60vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({flex: 'none'})}

`
const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${props => props.type === "total" && "26px"};
    font-weight: ${props => props.type === "total" && "600"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    padding: 10px 0px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
`

function Cart() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type={"filled"}>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <ProductContainer>
                <Product>
                    <Image src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074"/>
                    <ProductDetails>
                        <ProductName><b>Product : </b> JESSIE THUNCK SHOES</ProductName>
                        <ProductId><b>Id : </b>987654321</ProductId>
                        <Color color="black"/>
                        <ProductSize><b>Size : </b>37.5</ProductSize>
                    </ProductDetails>
                    <PriceDetails>
                        <AmountContainer>
                            <Add style={{cursor:"pointer"}}/>
                            <Amount>1</Amount>
                            <Remove style={{cursor:"pointer"}}/>
                        </AmountContainer>
                        <Price>$30</Price>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <Image src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072"/>
                    <ProductDetails>
                        <ProductName><b>Product : </b> BELLYVELLY HOODIE</ProductName>
                        <ProductId><b>Id : </b>987654320</ProductId>
                        <Color color="gray"/>
                        <ProductSize><b>Size : </b>M</ProductSize>
                    </ProductDetails>
                    <PriceDetails>
                        <AmountContainer>
                            <Add style={{cursor:"pointer"}}/>
                            <Amount>2</Amount>
                            <Remove style={{cursor:"pointer"}}/>
                        </AmountContainer>
                        <Price>$20</Price>
                    </PriceDetails>
                </Product>
            </ProductContainer>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$-5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart