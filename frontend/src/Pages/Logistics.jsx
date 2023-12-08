import React, {useState} from 'react'
import { OverviewComponent, Table } from 'Components'
import { logisticsData } from 'Utils/initialData'
import {filteredTableData} from 'Utils/handlingFunctions'

const Logistics = () => {
    const heading = [
        {
            'header': 'Daily Order Delivered',
            'icon': 'mdi:package-delivered'
        },
        {
            'header': 'Awaiting Delivery',
            'icon': 'carbon:delivery'
        },
        {
            'header': 'Out for Delivery',
            'icon': 'solar:delivery-bold'
        },
        {
            'header': 'For Pick-up',
            'icon': 'carbon:delivery-parcel'
        },
        {
            'header': 'On-Site Refills',
            'icon': 'bi:droplet-half'
        },
    ]
    const headers = ['Delivery ID', 'Order ID', 'Customer', 'Phone', 'Address', 'Courier', 'Progress', 'Delivered At']
    const content = [35, 6, 12, 5, 25]
    const [selectedTab, setSelectedTab] = useState('All');
    const accessorFunctionForProgress = (data) => data.progress;
    
    return (
        <main id='logistic' className='container-fluid'> 
            <div className='px-3 pt-3'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Logistics</h2>
            </div>
            <section className='container-fluid p-3 d-flex' style={{gap: '20px'}} >
            {heading.map((data, indx) => (
                <OverviewComponent heading={data} content={content[indx]} width={'100%'} key={indx}/>
            ))}
            </section>
            <section className='container-fluid px-3 pb-3'>
                <header className='d-flex justify-content-between align-items-end mb-3 px-3'>
                    <ul className='nav gap-2'>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('All')}>All</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('For Pickup')}>For Pickup</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Awaiting Delivery')}>Awaiting</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Out for Delivery')}>Dispatched</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Complete')}>Completed</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('On Site Refill')}>On Site Refill</button>
                        </li>
                    </ul>
                    <div className='d-flex gap-2 align-items-end'>
                        <button className='button-itm py-2 px-3 rounded-3'>+ Activity</button>
                    </div>
                </header> 
                <Table headers={headers} data={filteredTableData(logisticsData, selectedTab, accessorFunctionForProgress)} />
            </section>
        </main>
    )
}

export default Logistics