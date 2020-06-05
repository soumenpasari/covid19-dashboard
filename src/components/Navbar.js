import React from 'react';
import PropTypes from  'prop-types'

export const Navbar = ({title}) => {
    return (
        <nav className='navbar is-dark'>
            <div className='container'>
                <div className='navbar-brand'>
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
    title: 'C-19 DASH'
}