import React from 'react'

const SubDetails = ({data, header, headers}) => {
    return (
        <>
            <div className='d-flex gap-2 align-items-center'>
                <p className='fw-bolder m-0 header-txt text-nowrap'>{header}</p>
                <hr className='w-100 my-2' />
            </div>
            <div className='d-flex align-items-center text-secondary'>
                {headers.map((title, indx) => (
                    <span className='w-100' key={indx}>{title}</span>
                ))}
            </div>
            <div className='d-flex align-items-center py-1'>
                {Object.entries(data).map(([key, value], indx) => (
                    <span className='w-100' key={indx}>{`${value}`}</span>
                ))}
            </div>
        </>
    )
}

export default SubDetails