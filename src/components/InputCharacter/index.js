import React, { useState } from 'react'

import { useInputFilter } from './../../hooks/useFilterInput'

import { Container } from './styles'

export function InputCharacter() {
    // const [inputFilter, setInputFilter] = useState("fasdfasdf");
    // const [inputFilter, setInputFilter] = useState("fasdfasdf");

    const {inputFilter, setInputFilter} = useInputFilter();

    return (
        <Container
            value={inputFilter}
            onChange={(e) => setInputFilter(e.target.value)}
        />
    )
}
