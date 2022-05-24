import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 25%;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    ${mobile({width: '90%'})};
`

const Title = styled.h1`
    font-weight: 200;
`

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 0px;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px 10px 0px;
    padding: 10px;
    outline: none;
`

const Link = styled.a`
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
    margin-top: 15px;

    &:hover{
        color: #050596;
    }
`

const Button = styled.button`
    width: 40%;
    padding: 10px 0px;
    border: none;
    background-color: teal;
    color: white;
    font-weight: 500;
    cursor: pointer;
`

function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder={"username or email"}/>
                <Input placeholder={"password"}/>
            </Form>
            <Button>Login</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE AN ACCOUNT</Link>
        </Wrapper>
    </Container>
  )
}

export default Login