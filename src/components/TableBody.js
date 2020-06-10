import React, {useContext} from 'react';
import { TableRow } from './TableRow';

import { Context } from '../context/Store';

export const TableBody = () => {
    const [state,dispatch] = useContext(Context);
    const stateData = state.stateData.statewise;
    
    return (
        <tbody>
            {stateData && stateData.map( (stateWiseData,index) => (
                <TableRow rowData={stateWiseData} key={index} />
            ) )}
        </tbody>
    )
}
