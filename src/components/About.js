import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const About = () => {
    return (
        <div className='hero is-black is-fullheight-with-navbar'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title is-1'>About</h1>
                    <h3 className='subtitle'>Covid 19 India stats dashboard</h3>
                    <p>
                        This is a project to show the current stats of Covid 19 in India.
                        <br/>Fetching data from API (<a href='https://covid19india.org' 
                        target='_blank' rel='noopener noreferrer' >api.covid19india.org</a>)
                    </p>
                    <br/>
                    <p>
                        You can find this project code base on github. This is under MIT
                        License.<br/>
                        <a href='https://github.com/soumenpasari/covid19-dashboard' 
                        target='_blank' rel='noopener noreferrer'
                        className='button is-dark is-small'>
                            <span className='icon is-small'>
                                <FontAwesomeIcon icon='rocket' />
                            </span>
                            <span>Github repo</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
