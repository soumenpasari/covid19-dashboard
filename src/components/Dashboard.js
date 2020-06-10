import React, {useEffect,useContext} from 'react';
import {Context} from '../context/Store';
import { DashboardTitle } from './DashboardTitle';
import { DashboardContent } from './DashboardContent';

export const Dashboard = () => {
    const [state,dispatch] = useContext(Context);
    useEffect(() => {
        console.log('inside dashboard comp');
        console.log(state.stateData);
    });
    return (
        <div className='hero is-black is-fullheight-with-navbar'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns is-multiline'>
                        <DashboardTitle />
                        <DashboardContent />
                    </div>
                </div>
            </div>
        </div>
    )
}
