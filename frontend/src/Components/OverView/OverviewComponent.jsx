import React from 'react'
import { IconPark } from '../../Assets/SvgIcons'

const OverviewComponent = ({heading, content, width = ''}) => {
    
    return (
        <div className='rounded-3 py-3 px-4 overview' style={{width: width}}>
            <h5 className='header-txt m-0'>{heading.header}</h5>
            <div className='d-flex justify-content-between align-items-center'>
                <span className='data-txt'>{content}</span>
                <IconPark path={heading.icon} size={40} />
            </div>
        </div>
    )
}

export default OverviewComponent