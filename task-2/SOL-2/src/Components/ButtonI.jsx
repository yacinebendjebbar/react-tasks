import React from 'react'
import styled from 'styled-components'

export default function ButtonI (props) {

    const Increase = () => {
        props.fonction2();
    }

    const IncreaseButton = styled.button`
            width: 2rem;
            height: 2rem;
            font-size: 1rem;
        `
    return (
        <IncreaseButton onClick={Increase}>++</IncreaseButton>
    );
}