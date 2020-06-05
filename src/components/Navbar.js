import React from 'react';
import PropTypes from  'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = ({title}) => {
    return (
        <nav className='navbar is-black'>
            <div className='container'>
                <div className='navbar-brand'>
                    <span className='navbar-item'>
                        <FontAwesomeIcon icon='virus' />
                    </span>
                    <span className='navbar-item'>
                        {title}
                    </span>
                </div>
            </div>
        </nav>
    )
}

Navbar.prototypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: 'C-19'
}