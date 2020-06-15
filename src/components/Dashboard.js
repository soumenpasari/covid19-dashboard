import React, {useEffect,useContext} from 'react';
import {Context} from '../context/Store';
import Axios from 'axios';
// importing components
import { DashboardTitle } from './DashboardTitle';
import { DashboardContent } from './DashboardContent';

export const Dashboard = () => {
    const [state,dispatch] = useContext(Context);
    useEffect(() => {
        const getApiData = async () => {
            // resetting loader to false
            dispatch({type:'UPDATE_LOADING_STATE',payload: false});
            const res = await Axios.get('https://api.covid19india.org/data.json');
            // setting india total data
            dispatch({type:'UPDATE_TOTAL_INDIA_CASE', payload:res.data.statewise[0]});
            // setting state data
            let stateData = res.data.statewise;
            stateData.shift();
            dispatch({type:'UPDATE_STATE_DATA', payload:stateData});
            // updating loading status in state for loader
            dispatch({type:'UPDATE_LOADING_STATE',payload: true});
        }
        getApiData();
    },[]);
    return (
        <div className='hero is-black is-fullheight-with-navbar'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns is-multiline'>
                        <DashboardTitle title='State wise data' />
                        <DashboardContent />
                    </div>
                </div>
            </div>
        </div>
    )
}
