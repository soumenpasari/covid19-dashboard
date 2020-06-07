import React from 'react'
import { DataTableHead } from './DataTableHead'
import { TableBody } from './TableBody'

export const DataTable = () => {
    return (
        <table className='table is-fullwidth'>
            <DataTableHead />
            <TableBody />
        </table>
    )
}
