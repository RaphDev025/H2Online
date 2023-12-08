import React from 'react'
import { OverviewComponent, DoughnutChart, LineChart, AccordionTable } from 'Components'
import {orderHistory, doughnutData} from 'Utils/initialData'
const Dashboard = () => {
    const overviewHeaders = [
        
        {
            header: 'Total Customers',
            icon: 'bi:people-fill'
        },
        {
            header: 'Expenses',
            icon: 'vaadin:money-withdraw'
        },
        {
            header: 'For Pickup',
            icon: 'game-icons:water-gallon'
        },
        {
            header: 'Booking',
            icon: 'quill:checkmark-double'
        }
    ]
    const contents = [ 'P 4,020', 'P 3,200', 500, 'P 100', 50, 50, 13, 4]
    const tableHeaders = ['Date', 'Total', 'Items', 'Vendor', 'Payment', 'Delivery']

    return (
        <main id='dash' className='container-fluid '>
            <section className='container-fluid px-3 py-3 d-grid overview-container'>
            {overviewHeaders.map((data, indx) => (
                <OverviewComponent heading={data} content={contents[indx]} key={indx}/>
            ))}
            </section>
            <section className='px-3 py-3 d-grid statistic-container'>
                <div className='statistic rounded-3 p-3' style={{height: '350px'}}>
                    <h4 className='header m-0'>Daily Financial Metrics</h4>
                    <DoughnutChart data={doughnutData}/>
                </div>
                <div className='statistic rounded-3 p-3'  style={{height: '350px'}}>
                    <h4 className='header m-0'>Sales Growth</h4>
                    <LineChart />
                </div>
            </section>
            <section className='px-3 py-3 w-100'>
                <div className='statistic rounded-3 p-3'>
                    <h4 className='header'>Recent Invoices</h4>
                    <AccordionTable data={orderHistory} headers={tableHeaders} />
                </div>
            </section>
        </main>
    )
}

export default Dashboard