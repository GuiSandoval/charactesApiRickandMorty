import React from 'react'
import ReactPaginate from 'react-paginate'
import { Container } from './styles'

export function PaginationListFull({pages, onPageChange}) {
    return (
        <Container>
            <ReactPaginate
                pageCount={pages}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                nextLabel="Próximo"
                previousLabel="Anterior"
                onPageChange={onPageChange}
            />
        </Container>
    )
}
