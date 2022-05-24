import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    padding: 20px;
    ${mobile({padding: '10px'})};
`

const Title = styled.h1`
    margin-bottom: 30px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Options = styled.select`
    margin-left: 10px;
    padding: 5px;
    ${mobile({margin: '10px 0px 0px 0px'})};
`
const Option = styled.option``

const Filter = styled.div`
    ${mobile({display: 'flex', flexDirection: 'column'})};
`

const FilterText = styled.span`
    font-size: 18px;
    font-weight: 500;
`

function ProductList() {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Container>
            <Title>DRESSES</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Options>
                        <Option selected disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Options>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Options>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Options>
                </Filter>
            </FilterContainer>
        </Container>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default ProductList