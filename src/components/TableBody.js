import React, {useContext} from 'react';
import { TableRow } from './TableRow';

import { Context } from '../context/Store';

export const TableBody = () => {
    const [state] = useContext(Context);
    let stateData = state.stateData;
    return (
        <tbody>
            {stateData && 
            stateData.map( (stateWiseData,index) => (
                <TableRow rowData={stateWiseData} key={index} />
            ) )}
        </tbody>
    )
}
