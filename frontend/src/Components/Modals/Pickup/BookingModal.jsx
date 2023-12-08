import React from 'react'
import {IconPark} from 'Assets/SvgIcons'

const BookingModal = () => {
    return ( 
        <div className={`modal fade`} id="bookMod" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">New Reservation</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2 px-3'>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column gap-2 w-100'>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='itm' >Enter Customer ID</label>
                                        <input type='text' id='itm' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Item' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='address' >Address</label>
                                        <input type='text' id='address' className='p-2 bg-light rounded-3 w-100' placeholder='Address' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='phone' >Contact</label>
                                        <input type='telephone' id='phone' className='p-2 bg-light rounded-3 w-100' placeholder='Contact' required />
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-2 w-100'>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='month' >Enter Month</label>
                                        <input type='text' id='month' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Month' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='day' >Enter Day</label>
                                        <input type='text' id='day' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Day' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='time' >Enter Time</label>
                                        <input type='telephone' id='time' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Time' required />
                                    </div>
                                </div>
                            </div>
                            <h6 className='header-txt py-2 m-0'>Repeat Every:</h6>
                            <div className='d-flex justify-content-between'>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Every 3 Days
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Every 5 Days
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                    <label class="form-check-label" for="flexRadioDefault3">
                                        Every Week
                                    </label>
                                </div>
                            </div>
                            <di className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Cancel <IconPark path={'basil:cancel-outline'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Create <IconPark path={'gridicons:create'} size={18} /></button>
                            </di>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingModal