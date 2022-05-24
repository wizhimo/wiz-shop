import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import {products} from '../data'
import {mobile} from '../responsive'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({padding: '5px'})};
`

function Products() {
  return (
    <Container>
        {
            products.map(item => (
                <Product item={item} key={item.id}/>
            ))
        }
    </Container>
  )
}

export default Products