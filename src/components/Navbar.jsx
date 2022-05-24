import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import MyBadge from '../components/MyBadge'
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60px;
    padding: 20px;
    display: flex;
    align-items: center;
    ${mobile({height:"50px", padding: "0px 5px"})};
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
    ${mobile({display:'none'})};
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
    ${mobile({width: '80px'})};
`

const Center = styled.div`
    flex: 1;
  
`

const Logo = styled.h1`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    ${mobile({fontSize: '24px', marginLeft:'10px'})};
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({justifyContent: 'center', flex:'2'})};
`

const MenuItem = styled.div`
    margin-left: 25px;
    cursor: pointer;
    font-size: 14px;
    ${mobile({fontSize: '12px', marginLeft: '10px',fontWeight: '500'})};
`

function Navbar() {
  return (
    <Container>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search'/>
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