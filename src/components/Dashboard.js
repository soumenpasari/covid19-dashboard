import React from 'react';
import { DashboardTitle } from './DashboardTitle';
import { DashboardContent } from './DashboardContent';

export const Dashboard = () => {
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
