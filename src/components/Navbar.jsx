import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import MyBadge from '../components/MyBadge'


const Container = styled.div`
    height: 60px;
    padding: 20px;
    display: flex;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
`

const Language = styled.span`
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    outline: none;
`

const Center = styled.div`
    flex: 1;
  
`

const Logo = styled.h1`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuItem = styled.div`
    margin-left: 25px;
    cursor: pointer;
    font-size: 14px;
`

function Navbar() {
  return (
    <Container>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <SearchIcon style={{fontSize:"16px", cursor: "pointer"}}/>
            </SearchContainer>
        </Left>
        <Center>
            <Logo>wizShop.</Logo>
        </Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <MyBadge BadgeContent={4}/>
                </MenuItem>
            
        </Right>
    </Container>
  )
}

export default Navbar