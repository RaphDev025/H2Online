import React, {useState} from 'react'
import {SubDetails} from 'Components'

const MultiSelectionTable = ({data, headers, rowColor="un-select", height="300px"}) => {
    
    return (
        <div role="table" className='accordion' id='tableAccordion'>
            <TableHeader headers={headers} />
            <TableBody dataContents={data} height={height} rowColor={rowColor}/>
        </div>
    )
}

const TableBody = ({ dataContents, height, rowColor }) => {
    const [selected, setSelected] = useState('');
    const deliveryHeaders = ['Date & Time', 'Delivery Address', 'Status', 'Courier']
    const paymentHeaders = ['Settled Date', 'Status', 'Paid (pesos)', 'Balance (pesos)', 'Method']
    const customerHeaders = ['Name', 'Contact', 'Address']

    const toggleSelected = (select) => {
        setSelected(selected === select ? '' : select);
    }
    
    return (
        <div className='d-flex flex-column gap-2 table-container' role='rowgroup' style={{ height: height }}>
            {dataContents.map((data, indx) => (
            <div role='row' key={indx} className='rounded-3 accordion-item'>
                <h4 className={`accordion-header rounded-3 ${selected === data._id ? 'selected' : rowColor}`}>
                <button className='btn w-100 d-flex gap-2 collapsed' onClick={() => toggleSelected(data._id)} type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${data._id}`} aria-expanded='false' aria-controls={`collapse${data._id}`}>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data._id}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.date}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.total}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.items?.length}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.vendor}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.payment.status}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.delivery.status}</span>
                </button>
                </h4>
                <div id={`collapse${data._id}`} className='accordion-collapse collapse' data-bs-parent='#tableAccordion'>
                <div className='accordion-body d-flex gap-3 py-2' style={{ fontSize: '10px' }}>
                    <div className='w-100'>
                        <div className='d-flex gap-2 align-items-center'>
                            <p className='fw-bolder m-0 header-txt'>Items</p>
                            <hr className='w-100 my-2' />
                        </div>
                        <div className='d-flex align-items-center text-secondary text-center'>
                            <span className='w-100' >Item</span>
                            <span className='w-100' >Quantity</span>
                            <span className='w-100' >Service</span>
                            <span className='w-100' >Unit Price</span>
                            <span className='w-100' >Sub Total</span>
                        </div>
                        {data.items.map((item, i) => (
                            <div className='d-flex align-items-center text-center py-1' key={i}>
                                {Object.entries(item).map(([key, value], indx) => (
                                    <span className='w-100' key={indx} >{value}</span>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='w-100'>
                        <SubDetails data={data.customer} headers={customerHeaders} header={'Customer Details'} />
                        <SubDetails data={data.payment} headers={paymentHeaders} header={'Payment FulFillment'} />
                        <SubDetails data={data.delivery} headers={deliveryHeaders} header={'Delivery'} />
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        );
    }

const TableHeader = ({headers}) => {
    return (
        <div role='rowgroup'>
            <div role='row' className='d-flex gap-2 header-txt mb-3 px-3'>
            {headers.map((header, indx) => (
                <span key={indx} role='cell' className='w-100 text-center'>{header}</span>
            ))}
            </div>
        </div>
    )
}
export default MultiSelectionTable