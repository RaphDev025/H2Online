import React, {useState} from 'react'
import { OverviewComponent, AccordionTable, Table, IncomeModal, NewExpenseModal, ViewExpenseModal } from 'Components'
import { orderHistory, productsSoldData, expensesData } from 'Utils/initialData'
import { filteredTableData } from 'Utils/handlingFunctions'
const SalesMgmt = () => {
    const headers = [
        {
            'header': 'Revenue',
            'icon': 'ri:bar-chart-grouped-line'
        },
        {
            'header': 'Profit',
            'icon': 'tdesign:money'
        },
        {
            'header': 'Expense',
            'icon': 'vaadin:money-withdraw'
        },
        {
            'header': 'Total Credits',
            'icon': 'fluent:people-error-20-filled'
        },
        {
            'header': 'Total Settled Credits',
            'icon': 'quill:checkmark-double'
        }
    ]
    const contents = ['P 2000', 'P 750', 'P 1000', 'P 1500', 'P 1200']
    const tableHeader = ['Order ID', 'Date', 'Total', 'Items', 'Vendor', 'Payment', 'Delivery']
    const productsSoldHeaders = ['Product', 'Price', 'Sold(pcs)', 'Interactions']
    const expensesHeaders = ['Date', 'Item', 'Quantity', 'Unit Price', 'Amount']

    const [selectedTab, setSelectedTab] = useState('All');
    const accessorFunctionForPayment = (data) => data.payment.status;

    return ( 
        <main id='sales' className='container-fluid'>
            <div className='mx-3 pt-3 pb-2 d-flex justify-content-between border-bottom border-dark-subtle'>
                <h2 className='m-0 page-header'>Overview</h2>
                <button className='rounded-3 button-itm px-3' data-bs-target='#incomeMod' data-bs-toggle='modal'>Generate Report</button>
            </div>
            <section className='container-fluid p-3 d-flex' style={{gap: '20px'}} >
            {headers.map((data, indx) => (
                <OverviewComponent heading={data} content={contents[indx]} width={'100%'} key={indx}/>
            ))}
            </section>
            <section className='container-fluid px-3'>
                <h6 className='header-txt'>Daily Sales</h6>
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
                <AccordionTable headers={tableHeader} rowColor={'un-select-two'} data={filteredTableData( orderHistory, selectedTab, accessorFunctionForPayment)} height={'300px'} />
            </section>
            <section className='container-fluid p-3 d-flex gap-3'>
                <div className='bg-light flex-fill p-3 rounded-3'>
                    <h6 className='header-txt'>Products Sold</h6>
                    <Table headers={productsSoldHeaders} data={productsSoldData} height={'250px'}/>
                </div>
                <div className='bg-light flex-fill p-3 rounded-3'>
                    <div className='d-flex justify-content-between pb-2'>
                        <h6 className='header-txt'>Expenses</h6>
                        <button className='button-itm rounded-3 py-2 px-3' data-bs-target='#newExpense' data-bs-toggle='modal'>Add Expense</button>
                    </div>
                    <Table headers={expensesHeaders} data={expensesData} height={'250px'}/>
                </div>
            </section>
            <IncomeModal /> 
            <NewExpenseModal /> 
            <ViewExpenseModal />
        </main>
    )
}

export default SalesMgmt