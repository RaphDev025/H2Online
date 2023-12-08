import React from 'react'
import { Navigation } from 'Components'
import { Dashboard, CustomerMgmt, CustomerProfile, Inventory, LogisticsBooking, Logistics, SalesMgmt, OrderMgmt, WaterMeterReading, PoS } from 'Pages';
import { Routes, Route } from 'react-router-dom';

const PageLink = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/customer-management' element={<CustomerMgmt/>} />
                <Route path='/meter-reading' element={<WaterMeterReading/>} />
                <Route path='/customer-profile/:id' element={<CustomerProfile/>} />
                <Route path='/inventory' element={<Inventory/>} />
                <Route path='/booking' element={<LogisticsBooking/>} />
                <Route path='/logistic' element={<Logistics/>} />
                <Route path='/sales-mgmt' element={<SalesMgmt/>} />
                <Route path='/order-mgmt' element={<OrderMgmt/>} />
                <Route path='/point-of-sales' element={<PoS/>} />
            </Routes>
        </>
    )
}

export default PageLink