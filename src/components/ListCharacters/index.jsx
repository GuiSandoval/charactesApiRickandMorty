import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Container, AreaListCharacters } from './styles'

import { Character } from '../Character';
import { InputCharacter } from '../InputCharacter';

import { api } from '../../services/api'
import { useInputFilter } from '../../hooks/useFilterInput';
import { PaginationListFull } from '../PaginationListCharacters';


export function ListCharacters() {
    // hooks
    const { inputFilter } = useInputFilter();

    // states
    const [characters, setCharacters] = useState([])
    const [filterValues, setFilterValues] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // states[Pagination]
    const [pages, setPages] = useState(0);



    async function getCharactersApi(page = 1) {
        // /?page=2"
        api.get('/character', {
            params: {
                page: page,
            }
        })
            .then(response => {
                const results = response.data.results
                const pagination = response.data.info

                setPages(pagination.count);

                setCharacters(results)
                setFilterValues(results)
                setIsLoading(false)
            }).catch(error => {
                console.log('deu ruim')
                console.log(error)
            })
    }

    useEffect(() => {
        const filterValues = characters.filter((character) => {
            return character.name.toLowerCase().includes(inputFilter)
        })

        setFilterValues(filterValues)

    }, [inputFilter])

    useEffect(() => {
        getCharactersApi()
    }, []);

    return (
        <Container>
            <InputCharacter />
            {inputFilter}
            <AreaListCharacters>
                {isLoading ? "Carregando" :
                    (
                        filterValues.map(character => <Character key={character.id} name={character.name} gender={character.gender} image={character.image} species={character.species} />)
                    )}
            </ AreaListCharacters>

            <PaginationListFull onPageChange={({ selected }) => getCharactersApi(selected + 1)} pages={pages} />

        </Container >
    )
}
