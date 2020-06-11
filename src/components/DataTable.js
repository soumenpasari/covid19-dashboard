import React from 'react'
import { DataTableHead } from './DataTableHead';
import { TableBody } from './TableBody';

export const DataTable = () => {

    // declaring table headers
    const columnNames = ['State \\ UT','Confirmed','Active cases','Recovered','Deaths'];
    
    return (
        <table className='table is-fullwidth'>
            <DataTableHead header={columnNames} />
            <TableBody />
        </table>
    )
}
