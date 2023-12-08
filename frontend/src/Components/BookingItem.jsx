import React from 'react'

const BookingItem = ({data}) => {
    return (
        <div className='d-flex flex-column flex-wrap gap-1 justify-content-start column-gap-3 booking-item w-100 rounded-3 p-3'>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label'>Reservation ID:</span>
                <span>{data.id}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label'>Customer ID:</span>
                <span>{data.customer_id}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label'>Customer ID:</span>
                <span>{data.customer_id}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label'>Address:</span>
                <span>{data.address}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label'>Schedule:</span>
                <span className='booking-value'>{data.schedule}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label'>Creation Date:</span>
                <span className='booking-value'>{data.creationDate}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label '>Contact:</span>
                <span>{data.phone}</span>
            </div>
        </div>
    )
}

export default BookingItem