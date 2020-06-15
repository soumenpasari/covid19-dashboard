import React from 'react';

export const Loader = () => {
    return (
        <div className='columns is-centered'>
            <div className='column is-half'>
                <center>
                    <button className='button is-dark is-loading' >Loading...</button>
                    <span>Loading ...</span>
                </center>
            </div>
        </div>
    )
}
