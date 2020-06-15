import React, {useContext} from 'react';

import { Context } from '../context/Store';

import { DataTable } from './DataTable';
import { CaseCounter } from './CaseCounter';
import { Loader } from './Loader';

export const DashboardContent = () => {
    const [state,dispatch] = useContext(Context);
    if(state.isDataLoaded === false) {
        return (
            <div className='column is-9'>
                <Loader />
            </div>
        )
    }
    else {
        return (
            <div className='column is-9'>
                <CaseCounter />
                <DataTable />
            </div>
        )
    }
}
