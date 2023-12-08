import React, {useState} from 'react'
import { AccordionTable, OverviewComponent2 } from 'Components'
import {orderHistory} from 'Utils/initialData'
import {filteredTableData} from 'Utils/handlingFunctions'

const OrderMgmt = () => {
    //initial data for overview components and table headers
    const headers = ['Daily Sales', 'Paid Order', 'Pending Payment', 'Credited']
    const content = ['P 2000', 'P 750', 'P 1000', 'P 250']
    const captions = ['80 Total of Orders', '30 Total of Orders Paid', '40 Total of Pending Payments', '10 Total of Credited Orders']
    const tableHeader = ['Order ID', 'Date', 'Total', 'Items', 'Vendor', 'Payment', 'Delivery']
    
    const [selectedTab, setSelectedTab] = useState('All'); // initial useState
    const accessorFunctionForPayment = (data) => data.payment.status;
    
    return (
        <main id='order' className='container-fluid pb-3'>
            <div className='px-3 pt-3'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Order List</h2>
            </div>
            <section className='container-fluid p-3 d-grid overview-container' >
            {headers.map((data, indx) => (
                <OverviewComponent2 heading={data} content={content[indx]} caption={captions[indx]} key={indx}/>
            ))}
            </section>
            <section className='container-fluid px-3'>
                <header className='d-flex justify-content-between align-items-end mb-3 px-3'>
                    <ul className='nav gap-2'>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('All')}>All</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Pending')}>Pending</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Credited')}>Credited</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Paid')}>Completed</button>
                        </li>
                    </ul>
                </header> 
                <AccordionTable headers={tableHeader} rowColor={'un-select-two'} data={filteredTableData( orderHistory, selectedTab, accessorFunctionForPayment)} height={'400px'}/>
            </section>
        </main>
    )
}

export default OrderMgmt