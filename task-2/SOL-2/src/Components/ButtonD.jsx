import React from 'react'
import styled from 'styled-components'

const DecreaseButton = styled.button`
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
`

export default function ButtonD(props) {
    
    const Decrease = () => {
        props.fonction1();
    }

    return (
            <DecreaseButton onClick={Decrease}>--</DecreaseButton>
  )
}
