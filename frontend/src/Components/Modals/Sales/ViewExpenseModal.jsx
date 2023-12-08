import React from 'react'
import {IconPark} from 'Assets/SvgIcons'

const ViewExpenseModal = () => {
    return ( 
        <div className={`modal fade`} id="viewExpense" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog ">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <div>
                            <h1 className="modal-title fs-6" id="staticBackdropLabel">Expense</h1>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2'>
                            <div className='d-flex flex-column w-100'>
                                <label htmlFor='expense' >Enter Item</label>
                                <input type='text' id='expense' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Item' required />
                            </div>
                            <div className='d-flex gap-3 align-items-end justify-content-end'>
                                <div className='d-flex flex-column w-25'>
                                    <label htmlFor='qty' >Quantity</label>
                                    <input type='number' min={1} id='qty' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity' required/>
                                </div>
                                <div className='d-flex flex-column w-75'>
                                    <label htmlFor='amt' >Enter Amount</label>
                                    <input type='number' min={1} id='amt' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Amount' required/>
                                </div>
                            </div>
                            <div className='d-flex gap-2 align-items-center'>
                                <span className='text-secondary fs-6 header-txt'>Sub-Price:</span>
                                <strong>P 25.00</strong>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Delete <IconPark path={'material-symbols:delete-outline'} size={18} /></button>
                                <div className='d-flex gap-3'>
                                    <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Cancel <IconPark path={'ic:sharp-update-disabled'} size={18} /></button>
                                    <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Update <IconPark path={'clarity:update-line'} size={18} /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewExpenseModal