import Announcement from '../components/Announcement'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div``

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-size: 40px;
    font-weight: 200;
`

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
`

const FilterColor = styled.div`
    display: flex;
    align-items: center;
`

const FilterText = styled.span`
    font-size: 24px;
    font-weight: 200;
`


const Color = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.bc};
    margin-left: 10px;
    cursor: pointer;
`


const FilterSize = styled.div`
    display: flex;
    align-items: center;
`

const SizeOptions = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const Option = styled.option`
    
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`

const Amount = styled.div`
    width: 35px;
    height: 35px;
    padding: 5px;
    border: 1px solid teal;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 3px;
`

const Button = styled.button`
    width: 140px;
    height: 60px;
    font-weight: 500;
    border: 3px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: #e7e7e7;
    }
`

function Product() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={"https://images.unsplash.com/photo-1599447539673-793dc6a4aabd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388"}/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jeans</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Desc>
                <Price>$50</Price>
                <FilterContainer>
                    <FilterColor>
                        <FilterText>Color</FilterText>
                        <Color bc={"black"}/>
                        <Color bc={"blue"}/>
                        <Color bc={"gray"}/>
                    </FilterColor>
                    <FilterSize>
                        <FilterText>Size</FilterText>
                        <SizeOptions>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </SizeOptions>
                    </FilterSize>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor:"pointer"}}/>
                        <Amount>1</Amount>
                        <Add style={{cursor:"pointer"}}/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product