import React from 'react'
import { IconPark } from 'Assets/SvgIcons' 
import {handleDeleteItem, handleUpdateQuantity} from 'Utils/handlingFunctions'
const Receipt = ({data, headers, height='420px', selectedItems, setSelectedItems}) => {
    return (
        <div role="table" className='w-100 py-2'>
            <TableHeader headers={headers} />
            <TableBody dataContents={data} height={height} selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
        </div>
    )
}

const TableBody = ({dataContents, height, selectedItems, setSelectedItems}) => {

    return(
        <div className='d-flex flex-column w-100 gap-1 table-container-two border' role='rowgroup' style={{height: height}}>
        {dataContents.map((data, indx) => (
            <div role='row' key={indx} className={`d-flex text-center py-1 rounded-2  `} >
                <button className='btn p-0 px-2' onClick={() => handleDeleteItem(indx, selectedItems, setSelectedItems)}><IconPark path={'ant-design:delete-twotone'} color={'#005EC3'}  /></button>
                <span className='w-100 text-truncate d-flex align-items-end justify-content-center' role='cell' style={{fontSize: '11px'}}>
                    {data.item}
                </span>
                <span className='w-100 text-truncate d-flex align-items-end justify-content-center' role='cell' style={{fontSize: '11px'}}>
                    {data.service}
                </span>
                <span className='w-100 text-truncate d-flex align-items-end justify-content-center' role='cell' style={{fontSize: '11px'}}>
                    <button className='btn py-0 px-2 fw-bold' onClick={() => handleUpdateQuantity(indx, data.qty - 1, setSelectedItems, selectedItems)}>-</button>
                    <span className='px-1'>{data.qty}</span>
                    <button className='btn py-0 px-2 fw-bold' onClick={() => handleUpdateQuantity(indx, data.qty + 1, setSelectedItems, selectedItems)}>+</button>
                </span>
                <span className='w-100 text-truncate d-flex align-items-end justify-content-center' role='cell' style={{fontSize: '11px'}}>
                    P {data.unit_price}
                </span>
                <span className='w-100 text-truncate d-flex align-items-end justify-content-center' role='cell' style={{fontSize: '11px'}}>
                    P {data.sub_price}
                </span>
            </div>
        ))}
        </div>
    )
}

const TableHeader = ({headers}) => {
    return (
        <div role='rowgroup'>
            <div role='row' className='d-flex gap-2 rounded-2 receipt-header py-1 ps-4 header-txt mb-1'>
            {headers.map((header, indx) => (
                <span key={indx} role='cell' className='w-100 text-center'>{header}</span>
            ))}
            </div>
        </div>
    )
}
export default Receipt