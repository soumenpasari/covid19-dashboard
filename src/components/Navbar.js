import React from 'react';
import PropTypes from  'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

export const Navbar = ({title}) => {
    return (
        <nav className='navbar is-black'>
            <div className='container'>
                <Link to='/' className='navbar-brand'>
                    <span className='navbar-item'>
                        <FontAwesomeIcon icon='virus' />
                    </span>
                    <span className='navbar-item'>
                        {title}
                    </span>
                </Link>
                <div className='navbar-end'>
                    <Link to='/about' className='navbar-item'>About</Link>
                </div>
            </div>
        </nav>
    )
}

Navbar.prototypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: 'C-19 India'
}