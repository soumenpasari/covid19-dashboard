import React from 'react';

export const DataTableHead = ({header}) => {
    return (
        <thead>
            <tr>
                {header.map((column,index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
        </thead>
    )
}
