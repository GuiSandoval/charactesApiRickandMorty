import React from 'react'

import {Container} from './styles';

export function Character({name, gender, image, species}) {
    return (
        <Container>
            <img src={image} alt={name} srcset="" />
            <h2>{name}</h2>
            <p>{gender}</p>
            <p>{species}</p>
        </Container>
    )
}
