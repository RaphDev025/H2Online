import React from 'react'

const OverviewComponent2 = ({heading, content, caption, width = ''}) => {
    return (
        <div className='rounded-3 py-3 px-4 overview d-flex flex-column' style={{width: width}}>
            <h5 className='header-txt m-0'>{heading}</h5>
            <span className='data-txt'>{content}</span>
            <span className='data-caption'>{caption}</span>
        </div>
    )
}

export default OverviewComponent2