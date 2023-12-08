import React, {useState, useEffect} from 'react'
import {NightMeter, MeterModal} from 'Components'
import { filterData } from 'Utils/handlingFunctions'
import { format } from 'date-fns';
import { sampleMeterData } from 'Utils/initialData'

const WaterMeterReading = () => {
    const headers = ['Date', 'Morning Read', 'Evening Read']
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredData, setFilteredData] = useState([]);
    const [meterData, setMeterData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedMeter, setSelectedMeter] = useState(null);

    const handleUpdateCallback = async () => {
        await fetchMeterData(); // Fetch the updated data after an item is updated
      };

    const handleAddOrUpdate = async (newData) => {
        try {
          const method = newData._id ? 'PATCH' : 'POST';
          const endpoint = newData._id ? `http://localhost:4000/api/meters/${newData._id}` : 'http://localhost:4000/api/meters';
    
          const response = await fetch(endpoint, {
            method,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
          });
    
          const updatedData = await response.json();
    
          if (response.ok) {
            console.log('Data sent/updated successfully:', updatedData);
            alert('Data Sent/Updated');
    
            // Trigger the callback function if it's provided
            if (handleUpdateCallback) {
              handleUpdateCallback();
            }
    
            // Update the local state with the new data
            setMeterData((prevData) => {
              // If it's an update, replace the existing item
              if (newData._id) {
                return prevData.map((item) => (item._id === newData._id ? updatedData : item));
              }
              // If it's an addition, append the new item
              return [...prevData, updatedData];
            });
          } else {
            alert('Error sending/updating data: duplicate data');
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setSelectedRow(null);
        }
      };
    
      const fetchMeterData = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/meters');
          const data = await response.json();
    
          if (response.ok) {
            setMeterData(data);
          } else {
            console.error('Error fetching data:', data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      useEffect(() => {
        fetchMeterData();
      }, []);
  
      useEffect(() => {
        const filteredContents = filterData(meterData, searchQuery);
        console.log('Filtered Contents:', filteredContents);
        setFilteredData(filteredContents);
      }, [searchQuery, meterData]);
      
    return (
        <main id='meter' className='container-fluid'>
            <div className='px-3 pt-3'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Water Meter Reading</h2>
            </div>
            <section className='container-fluid px-3 pb-3'>
                <header className='d-flex justify-content-between align-items-end'>
                    <div className='d-flex flex-column'>
                        <label htmlFor='search' >Search...</label>
                        <input type='text' id='search' className='p-2 rounded-3' placeholder='Search...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    </div>
                    <button className='button-itm rounded-3 py-2 px-3' data-bs-target="#meterRead" data-bs-toggle="modal">+ Add Read</button>
                </header>
                <div className='w-100 py-2' >
                    <div role="table" className='w-100'>
                        <div role='rowgroup'>
                            <div role='row' className='d-flex gap-2 header-txt mb-3'>
                            {headers.map((header, indx) => (
                                <span key={indx} role='cell' className='w-100 text-center'>{header}</span>
                            ))}
                            </div>
                        </div>
                        <div className='d-flex flex-column w-100 gap-2 table-container-two' role='rowgroup' style={{height: '525px'}}>
                        {filteredData.map((data, indx) => (
                            <div role='row' data-bs-target="#nightRead" data-bs-toggle="modal" key={indx} className={`table-row d-flex text-center py-2 rounded-3  ${selectedRow === data ? 'selected' : ''}`} onClick={() => { setSelectedRow(data); setSelectedMeter(data); }}>
                                <span className='w-100 text-truncate ' style={{fontSize: '12px'}} role='cell'>
                                {format(new Date(data.createdAt), 'MM/dd/yyyy')}
                                </span>
                                <span className='w-100 text-truncate ' style={{fontSize: '12px'}} role='cell'>
                                    {data.day_read}
                                </span>
                                <span className='w-100 text-truncate ' style={{fontSize: '12px'}} role='cell'>
                                    {data.evening_read}
                                </span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
            <MeterModal onAddOrUpdate={handleAddOrUpdate} />
            <NightMeter onAddOrUpdate={handleAddOrUpdate} selectedMeter={selectedMeter} onUpdateCallback={handleUpdateCallback}/>
        </main> 
    )
}

export default WaterMeterReading