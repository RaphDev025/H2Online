import React from 'react'
import {IconPark} from 'Assets/SvgIcons'

const ScheduleModal = () => {
    return (
        <div className={`modal fade`} id="schedMod" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">Schedule Delivery</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2 px-3'>
                            <div className='d-flex gap-3' >
                                <div className='d-flex flex-column gap-2 w-100'>
                                    <div className='header-txt fs-5 d-flex align-items-center gap-3'><IconPark path={'uiw:date'} />Date</div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='year' >Year</label>
                                        <input type='text' id='year' className='p-2 bg-light rounded-3 w-100' placeholder='Year' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='month' >Month</label>
                                        <input type='text' id='month' className='p-2 bg-light rounded-3 w-100' placeholder='Month' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='day' >Day</label>
                                        <input type='text' id='day' className='p-2 bg-light rounded-3 w-100' placeholder='Day' required />
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-2 w-100'>
                                    <div className='header-txt fs-5 d-flex align-items-center gap-3'><IconPark path={'fluent-mdl2:date-time-12'} />Time</div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='hour' >Hour</label>
                                        <input type='text' id='hour' className='p-2 bg-light rounded-3 w-100' placeholder='Hour' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='minute' >Minutes</label>
                                        <input type='text' id='minute' className='p-2 bg-light rounded-3 w-100' placeholder='Minutes' required />
                                    </div>
                                    <div className="dropdown w-100 mt-4">
                                        <button className="btn w-100 pt-2 button-itm-outline text-primary bg-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Time
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><p className="dropdown-item">AM</p></li>
                                            <li><p className="dropdown-item">PM</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <div className='d-flex flex-column'>
                                    <span className='fs-5 text-dark'>June 16, 2023</span>
                                    <span className='text-secondary fs-6'>04:30 PM</span>
                                </div>
                                <div className='d-flex gap-3'>
                                    <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Cancel <IconPark path={'basil:cancel-outline'} size={18} /></button>
                                    <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Create <IconPark path={'gridicons:create'} size={18} /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleModal