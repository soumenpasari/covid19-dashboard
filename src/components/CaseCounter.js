import React, {useContext} from 'react'
import { CountShowcase } from './CountShowcase';

import {Context} from '../context/Store';

export const CaseCounter = () => {
    const [state] = useContext(Context);
    let confirmed = null;
    let active = null;
    let recovered = null;
    let deaths = null;
    if(state.stateData !== undefined) {
        confirmed = state.indiaTotalData.confirmed;
        active = state.indiaTotalData.active;
        recovered = state.indiaTotalData.recovered
        deaths = state.indiaTotalData.deaths;
    }
    return (
        <div className='columns is-multiline'>
            <div className='column is-3'>
                <CountShowcase title='Confirmed' value={confirmed} />
            </div>
            <div className='column is-3'>
                <CountShowcase title='Active' value={active} />
            </div>
            <div className='column is-3'>
                <CountShowcase title='Recovered' value={recovered} />
            </div>
            <div className='column is-3'>
                <CountShowcase title='Deaths' value={deaths} />
            </div>
        </div>
    )
}
