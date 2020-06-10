import React from 'react'
import { TableColumn } from './TableColumn'

export const TableRow = ({rowData}) => {
    console.log(rowData);
    return (
        <tr className='has-text-cyan'>
            <TableColumn columnValue={rowData.state} />
            <TableColumn columnValue={rowData.active} />
            <TableColumn columnValue={rowData.recovered} />
            <TableColumn columnValue={rowData.deaths} />
        </tr>
    )
}
