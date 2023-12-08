import React from 'react'
import {IconPark} from 'Assets/SvgIcons'

const ReStockModal = () => {
    return (
        <div className={`modal fade`} id="reStock" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">Request Partial Re-Stock</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2'>
                            <div className='d-flex flex-column w-100'>
                                <label htmlFor='meter' >Enter Stock</label>
                                <input type='number' id='meter' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Stock' required />
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr d-flex align-items-center gap-2 py-2 px-3 rounded-3 text-uppercase'>Cancel <IconPark path={'basil:cancel-outline'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2 '>Request <IconPark path={'streamline:shipment-add'} size={18} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReStockModal