import React from 'react'
import {IconPark} from 'Assets/SvgIcons'

const EditProfileModal = () => {
    return (
        <div className={`modal fade`} id="editUser" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog ">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">Edit Customer Profile</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2'>
                            <div className='d-flex gap-3'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='fname' >First Name</label>
                                    <input type='text' id='fname' className='p-2 bg-light rounded-3 w-100' placeholder='First Name' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='lname' >Last Name</label>
                                    <input type='text' id='lname' className='p-2 bg-light rounded-3 w-100' placeholder='Last Name' required />
                                </div>
                            </div>
                            <div className='d-flex gap-3 align-items-end justify-content-end'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='phone' >Contact No.#</label>
                                    <input type='telephone' id='phone' className='p-2 bg-light rounded-3 w-100' placeholder='Contact No.#' required/>
                                </div>
                                <div className="dropdown w-100">
                                    <button className="btn w-100 button-itm-outline text-primary bg-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Gender
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><p className="dropdown-item">Male</p></li>
                                        <li><p className="dropdown-item">Female</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label htmlFor='address' >Address</label>
                                <input type='text' id='address' className='p-2 bg-light rounded-3 w-100' placeholder='Address' required />
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='email' >Email</label>
                                    <input type='email' id='email' className='p-2 bg-light rounded-3 w-100' placeholder='Email' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='pass' >Password</label>
                                    <input type='password' id='pass' className='p-2 bg-light rounded-3 w-100' placeholder='Password' required/>
                                </div>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase'>Cancel <IconPark path={'ic:sharp-update-disabled'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase'>Update <IconPark path={'clarity:update-line'} size={18} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileModal