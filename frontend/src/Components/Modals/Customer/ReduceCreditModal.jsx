import React from 'react'
import {IconPark} from 'Assets/SvgIcons'
import gcash from 'Assets/images/gcash.png'

const ReduceCreditModal = () => {
    return (
        <div className={`modal fade`} id="reduceCredit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog ">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">Reduce Credit Balance</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2 px-3'>
                            <div>
                                <h6 className='header-txt'>Credit Amount</h6>
                                <div className='neuromorphism text-center p-3 rounded-3'>
                                    <span className='header-txt fs-3'>P 350.00</span>
                                </div>
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
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="paymentMethods" id="cash" checked/>
                                    <label class="form-check-label fs-5 text-dark" for="cash"><IconPark path={'bi:cash'} size={20} color={'#003E81'}/> Cash </label>
                                </div>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="paymentMethods" id="gcash" />
                                    <label class="form-check-label fs-5 text-dark" for="gcash"> <img src={gcash} width={'24px'} alt={gcash}/> GCash </label>
                                </div>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center'>Cancel <IconPark path={'ic:sharp-update-disabled'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase'>Pay <IconPark path={'mdi:cash-check'} size={18} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduceCreditModal