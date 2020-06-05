import React from 'react'
import { Filter } from './Filter'
import { DataTable } from './DataTable'

export const DashboardContent = () => {
    return (
        <div className='column is-9'>
            <Filter />
            <DataTable />
        </div>
    )
}
