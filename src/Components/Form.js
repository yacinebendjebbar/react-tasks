import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 20rem;
    height: 24rem;
    background-color: beige;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1rem;
    gap: 3rem;
`
const Input = styled.input`
    width: 16rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 1rem;
`

const Button = styled.button`
    width: 16rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 1rem;
    background-color: aquamarine;
`

const Form = ()=> {
    return (
            <Container>
                <Input placeholder='Enter your email' />
                <Input placeholder='Enter your password' />
                <Button>Login</Button>
            </Container>
    );
}

export default Form