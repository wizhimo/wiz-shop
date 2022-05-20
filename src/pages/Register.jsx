import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 40%;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-weight: 200;
`

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    outline: none;
`

const Agreement = styled.span`
    font-size: 11px;
    margin-bottom: 20px;
`

const Link = styled.a`
    cursor: pointer;

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

function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder={"first name"}/>
                <Input placeholder={"last name"}/>
                <Input placeholder={"user name"}/>
                <Input placeholder={"email"}/>
                <Input placeholder={"password"}/>
                <Input placeholder={"confirm password"}/>
            </Form>
            <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <Link><b>PRIVACY POLICY</b></Link></Agreement>
            <Button>CREATE</Button>
        </Wrapper>
    </Container>
  )
}

export default Register