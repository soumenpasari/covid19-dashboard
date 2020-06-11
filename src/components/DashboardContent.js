import React from 'react'
import { DataTable } from './DataTable'
import { CaseCounter } from './CaseCounter'

export const DashboardContent = () => {
    return (
        <div className='column is-9'>
            <CaseCounter />
            <DataTable />
        </div>
    )
}
