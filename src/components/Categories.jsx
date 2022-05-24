import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {categoryItems} from '../data'
import {mobile} from '../responsive'

const Container = styled.div`
  
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({flexDirection:'column', padding: '5px'})};
    
`

function Categories() {
  return (
    <Container>
        {
          categoryItems.map(item => (
            <CategoryItem item={item} key={item.id} />
          ))
        }
    </Container>
  )
}

export default Categories