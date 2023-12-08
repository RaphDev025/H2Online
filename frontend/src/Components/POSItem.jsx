import React from 'react'
import { handleItemClick, handleItemSelected } from 'Utils/handlingFunctions'
const POSItem = ({data, customerName, isSelected, selectedItems, setSelectedItems }) => {
    return (
        <div className={`rounded-3 pos-itm p-3 d-flex flex-column align-items-center justify-content-center ${ customerName ? (isSelected ? 'select' : 'selectable') : 'not-selectable' }`} onClick={() => handleItemClick(customerName, isSelected, data, () => handleItemSelected(data, selectedItems, setSelectedItems))}>
            <img src={data.imge} alt={data.imge} />
            <span className='itm-value '>{data.item}</span>
            <span className='fw-bold itm-value'>P {data.unit_price}.00</span>
        </div>
    )
}

export default POSItem