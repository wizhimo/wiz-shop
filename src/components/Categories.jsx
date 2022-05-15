import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {categoryItems} from '../data'

const Container = styled.div`
  
  display: flex;
  padding: 20px;
  justify-content: space-between;
    
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