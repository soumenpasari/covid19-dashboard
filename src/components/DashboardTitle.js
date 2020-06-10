import React from 'react';
import PropTypes from 'prop-types';
// icon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DashboardTitle = ({title, icon, onTitleClick}) => {
    return (
        <div className='column is-3'>
            <h2 className='title is-3'>
                <FontAwesomeIcon icon={icon} />
            </h2>
            <h3 className='subtitle'>{title}</h3>
        </div>
    )
}

DashboardTitle.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

DashboardTitle.defaultProps = {
    title: 'Dashboard',
    icon: 'virus'
}