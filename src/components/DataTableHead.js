import React from 'react';

const columnNames = ['id','Country','Active cases','Recovered','Deaths'];

export const DataTableHead = () => {
    return (
        <thead>
            <tr>
                {columnNames.map(column => (
                    <th>{column}</th>
                ))}
            </tr>
        </thead>
    )
}
