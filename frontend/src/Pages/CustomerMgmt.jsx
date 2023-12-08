import React, { useState, useEffect, useCallback} from 'react'
import { OverviewComponent, TableLink, NewCustomerModal } from 'Components'
import { sortContents } from 'Utils/handlingFunctions'

const CustomerMgmt = () => {
    const header = [
        {
            header: 'Total Customers',
            icon: 'bi:people-fill'
        },
        {
            header: 'Daily Credited Customers',
            icon: 'solar:checklist-bold'
        }
    ]
    const content = [500, 50]
    const headers = ['Customer Name', 'Contact', 'Address', 'Total Credit', 'Account Creation', 'Agua Coins']

    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('Latest'); // Default sort order
    const [filteredContents, setFilteredContents] = useState([]);

    const [selectedTab, setSelectedTab] = useState('All');

    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsersData = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/users');
            if (!response.ok) {
            throw new Error('Failed to fetch users data');
            }
            const data = await response.json();
            setUsersData(data)
            console.log(data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchUsersData();
    }, []);
    
    const updateFilteredContents = useCallback(() => {
        let filtered = usersData.slice();
    
        if (selectedTab === 'Credited') {
            filtered = filtered.filter((content) => content.creditBalance > 0);
        }
    
        filtered = filtered.filter((content) =>
            content.first_name && content.first_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
        filtered = sortContents(filtered, sortOrder);
    
        setFilteredContents(filtered);
    }, [searchQuery, sortOrder, selectedTab, usersData]);
    

    useEffect(() => {
        updateFilteredContents() // Update finalContents whenever the sortOrder changes
    }, [sortOrder, searchQuery, updateFilteredContents])
    
    return (
        <main id='customer' className='container-fluid'>
            <div className='px-3 pt-3'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Customer List</h2>
            </div>
            <section className='container-fluid px-3 py-3 d-flex' style={{gap: '20px'}}>
            {header.map((data, indx) => (
                <OverviewComponent heading={data} content={content[indx]} key={indx} width={'250px'} />
            ))}
            </section>
            <section className='container-fluid px-3 pb-3'>
                <header className='d-flex justify-content-between align-items-end'>
                    <ul className='nav gap-2'>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('All')}>All</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Credited')}>Credited Customers</button>
                        </li>
                        <li className='nav-item px-3'>
                            <button type='button' className='button-itm py-2 px-3 rounded-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop">+ New Customer</button>
                        </li>
                    </ul>
                    
                    <div className='d-flex gap-2 align-items-end'>
                        <div className="dropdown">
                            <button className="button-itm py-2 px-3 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By: {sortOrder}</button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => setSortOrder('Agua Coins')} >Agua Coins</button></li>
                                <li><button className="dropdown-item" onClick={() => setSortOrder('Total Credits')} >Total Credits</button></li>
                                <li><button className="dropdown-item" onClick={() => setSortOrder('Latest')} >Latest</button></li>
                                <li><button className="dropdown-item" onClick={() => setSortOrder('Oldest')} >Oldest</button></li>
                            </ul>
                        </div>

                        <div className='d-flex flex-column'>
                            <label htmlFor='search' >Search by name...</label>
                            <input type='text' id='search' className='p-2 bg-light rounded-3' placeholder='Search by name...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                        </div>
                    </div>
                </header>
                <div className='w-100 py-2' >
                {loading ? (
                    <p className='w-100 text-center'>Loading...</p>
                ) : usersData.length === 0 ? (
                    <p className='w-100 text-center'>No customers found. Add a customer.</p>
                ) : (
                    <TableLink headers={headers} data={filteredContents} />
                )}
                </div>
            </section>
            <NewCustomerModal />
        </main>
    )
}

export default CustomerMgmt