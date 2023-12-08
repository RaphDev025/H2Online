import React from 'react'
import {IconPark} from 'Assets/SvgIcons'

const CashPaymentModal = () => {
    return (
        <div className={`modal fade`} id="cashPay" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6 text-center" id="staticBackdropLabel">Cash Payment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2 px-3'>
                            <div className='neuromorphism text-center p-3 justify-content-between d-flex align-items-center rounded-3'>
                                <h6 className='header-txt m-0'>Total Amount</h6>
                                <span className='header-txt fs-3'>P 350.00</span>
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='amt' >Enter Amount</label>
                                    <input type='number' min={1} id='amt' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Amount' required />
                                </div>
                                <span className='text-secondary fw-medium'>Change: <span className='text-dark'>P 25.00</span></span>
                            </div>
                            <div className='d-flex flex-column gap-2 '>
                                <span className='header-txt'>Payment Method</span>
                                <div className='d-flex justify-content-between gap-3' >
                                    <div class="form-check d-flex w-100 p-0">
                                        <input class="btn-check" type="radio" name="paymentMethods" id="email" />
                                        <label class="btn btn-outline-primary fs-6 " for="email"> via Email </label>
                                    </div>
                                    <div class="form-check d-flex w-100 p-0">
                                        <input class="btn-check" type="radio" name="paymentMethods" id="appNotif" />
                                        <label class="btn btn-outline-primary fs-6 " for="appNotif"> via App </label>
                                    </div>
                                    <div class="form-check d-flex w-100 p-0">
                                        <input class="btn-check" type="radio" name="paymentMethods" id="sms" />
                                        <label class="btn btn-outline-primary fs-6 " for="sms"> via SMS </label>
                                    </div>
                                </div>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center'>Cancel <IconPark path={'basil:cancel-outline'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase'>Pay <IconPark path={'mdi:cash-check'} size={18} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashPaymentModal