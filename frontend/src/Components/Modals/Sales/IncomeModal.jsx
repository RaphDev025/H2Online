import React from 'react'
import {IconPark} from 'Assets/SvgIcons'

const IncomeModal = () => {
    return ( 
        <div className={`modal fade`} id="incomeMod" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <div>
                            <h1 className="modal-title fs-6" id="staticBackdropLabel">Income Assessment</h1>
                            <figcaption className=" header-txt fw-light">Evaluating the inflow of money</figcaption>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column'>
                            <h6 className='header-txt m-0 fs-5'>Enter the quantity of bills per field</h6>
                            <div className='d-flex align-items-center gap-2 justify-content-end'>
                                <span className='text-secondary fs-6 header-txt'>Total Cash:</span>
                                <strong className='fs-5'>P 3,050.00</strong>
                            </div>
                            <div className='d-flex gap-2 w-100 mb-3'>
                                <div className='d-flex flex-column gap-1 w-100'>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='thousand' >Quantity of P 1,000.00 bill(s)</label>
                                        <input type='number' min={1} id='thousand' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity of P 1,000.00 bill(s)' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='five-hundred' >Quantity of P 500.00 bill(s)</label>
                                        <input type='number' min={1} id='five-hundred' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity of P 500.00 bill(s)' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='two-hundred' >Quantity of P 200.00 bill(s)</label>
                                        <input type='number' min={1} id='two-hundred' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity of P 200.00 bill(s)' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='hundred' >Quantity of P 100.00 bill(s)</label>
                                        <input type='number' min={1} id='hundred' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity of P 100.00 bill(s)' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='fifty' >Quantity of P 50.00 bill(s)</label>
                                        <input type='number' min={1} id='fifty' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity of P 50.00 bill(s)' required />
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-1 w-100'>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='twenty' >Quantity of P 20.00 coin(s)</label>
                                        <input type='number' min={1} id='twenty' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity of P 20.00 coin(s)' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='ten' >Quantity of P 10.00 coin(s)</label>
                                        <input type='number' min={1} id='ten' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity of P 10.00 coin(s)' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='five' >Quantity of P 5.00 coin(s)</label>
                                        <input type='number' min={1} id='five' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity of P 5.00 coin(s)' required />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <label htmlFor='one' >Quantity of P 1.00 coin(s)</label>
                                        <input type='number' min={1} id='one' className='p-2 bg-light rounded-3 w-100' placeholder='Quantity of P 1.00 coin(s)' required />
                                    </div>
                                </div>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 gap-2 d-flex align-items-center rounded-3 text-uppercase'>Cancel <IconPark path={'basil:cancel-outline'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 d-flex align-items-center gap-2 text-uppercase'>Proceed <IconPark path={'ph:arrow-bend-up-right-bold'} size={18} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeModal