import React from 'react'

export const CountShowcase = ({title,value}) => {
    return (
        <div className='box has-background-grad has-text-custom-blue'>
            <h4 className='title is-4'>{title}</h4>
            <hr />
            <span>{value}</span>
        </div>
    )
}
