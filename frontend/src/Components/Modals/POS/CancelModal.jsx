import React from 'react'
import {IconPark} from 'Assets/SvgIcons'
import { handleClearCustomer } from 'Utils/handlingFunctions'

const CancelModal = ({setCustomerName, setDiscount, setSelectedItems, setPaymentMethods, setShipping}) => {
    return (
        <div className={`modal fade`} id="cancelOrd" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">Cancel Transaction</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Do you want to Cancel the Transaction?
                        <div className='py-2 mt-2 px-0 d-flex modal-footer justify-content-between'>
                            <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>No <IconPark path={'basil:cancel-outline'} size={18} /></button>
                            <button className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2' onClick={() => handleClearCustomer(setCustomerName, setDiscount, setSelectedItems, setPaymentMethods, setShipping)} data-bs-dismiss="modal">Yes <IconPark path={'ci:check-all'} size={18} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancelModal