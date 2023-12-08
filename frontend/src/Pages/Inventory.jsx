import React, { useState, useEffect } from 'react';
import { NewItemModal, ReStockModal, ViewItemModal } from 'Components';
import {inventoryContents} from 'Utils/initialData'
import { filterInventoryItems, getStockStatus, calculateStatus } from 'Utils/handlingFunctions'
const Inventory = () => {
    const [selectedTab, setSelectedTab] = useState('All')
    const [selectedItem, setSelectedItem] = useState(null); // Track the selected item
    const [inventoryContents, setInventoryContents] = useState([]);

  const fetchInventoryData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/products');
      const data = await response.json();

      if (response.ok) {
        setInventoryContents(data);
        console.log(data)
      } else {
        console.error('Error fetching inventory data:', data);
      }
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };

  const filteredItems = filterInventoryItems(inventoryContents, getStockStatus, selectedTab);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const decide = (stock, max) => {
    const status = calculateStatus(stock, max);
    if (status === 'Low') {
      return 'border-danger';
    } else if (status === 'Half') {
      return 'border-warning';
    }
    return 'border-success';
  };

  const handleUpdateCallback = async () => {
    await fetchInventoryData();
  };

  useEffect(() => {
    fetchInventoryData();

  }, []);

    return (
        <main id='inventory' className='container-fluid h-100'>
            <div className='px-3 pt-3'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Inventory</h2>
            </div>
            <section className='container-fluid px-3 pb-3'>
                <header className='d-flex justify-content-between align-items-end'>
                    <ul className='nav gap-2'>
                        <li className='nav-item'>
                            <button className={`nav-link itm`} onClick={() => setSelectedTab('All')}>All</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm`} onClick={() => setSelectedTab('Full Stock')}>Full Stock</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm`} onClick={() => setSelectedTab('Half Stock')}>Half Stock</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm`} onClick={() => setSelectedTab('Low Stock')}>Low Stock</button>
                        </li>
                        <li className='nav-item px-3'>
                            <button className='button-itm py-2 px-3 rounded-3' data-bs-target='#newItem' data-bs-toggle="modal">+ Add Item</button>
                        </li>
                    </ul>
                </header>
                <section className='py-3 d-flex gap-3 flex-wrap'>
                {filteredItems && filteredItems.map((sampleData, indx) => (
                    <div key={indx} data-bs-target='#viewItem' data-bs-toggle="modal" onClick={() => handleSelectItem(sampleData)} className={`p-3 bg-light rounded-3 border-start border-5 ${decide(sampleData.stock, sampleData.max)}`} style={{width: '230px', cursor: 'pointer'}} >
                        {/* <img src={imge} alt={imge} /> */}
                        <div className='mt-2 d-flex flex-column itm-card'>
                            <div className='d-flex justify-content-between'>
                                <span className='label'>Item</span>
                                <span className='lbl-val'>{sampleData.item_name}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span className='label'>{`Stock (max. ${sampleData.max_stock} pcs)`}</span>
                                <span className='lbl-val'>{sampleData.stock}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span className='label'>Unit Price</span>
                                <span className='lbl-val'>{sampleData.unit_price}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span className='label'>Status</span>
                                <span className='lbl-val'> Stock</span>
                            </div>
                        </div>
                    </div>
                ))}
                </section>
            </section>
            <ViewItemModal onUpdateCallback={handleUpdateCallback } data={selectedItem} />
            <NewItemModal onUpdateCallback={handleUpdateCallback } />
            <ReStockModal />
        </main>
    );
};

export default Inventory;
