import React , {useState} from 'react'
import styled from 'styled-components'
import Buttond from './ButtonD'
import Buttoni from './ButtonI'

export default function Counter() {
    const Container = styled.body`
        width: 100%;
        height: 100%;
        background-color: #212121;
        color: #c8c8c8;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    `
    const [number,setNumber] = useState(0);

    const Inc = () => {
        setNumber(number + 5);
        console.log(number);
    }

    const Dec = () => {
        setNumber(number - 5);
        console.log(typeof(number));
    }

    return (
        <Container>
            <Buttond 
                fonction1={Dec}
            />
            <h1>
                {number}
            </h1>
            <Buttoni 
                fonction2={Inc}
            />
        </Container>
    )
}
