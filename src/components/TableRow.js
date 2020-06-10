import React from 'react'
import { TableColumn } from './TableColumn'

export const TableRow = ({rows}) => {
    return (
        <tr className='has-text-cyan'>
            <TableColumn />
            <TableColumn />
            <TableColumn />
            <TableColumn />
            <TableColumn />
        </tr>
    )
}
