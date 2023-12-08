import React, { useState } from 'react'
import {IconPark} from 'Assets/SvgIcons'
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const NightMeter = ({ selectedMeter, onAddOrUpdate, onUpdateCallback  }) => {
    const [evening_read, setEvening_read] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Ensure that selectedMeter is not null before extracting _id
        if (!selectedMeter) {
          console.error('No selected meter to update.');
          return;
        }
    
        // Formulate the data to be updated
        const updatedData = {
          _id: selectedMeter._id,
          evening_read: evening_read,
        };
    
        // Call the function passed through props to handle addition/update
        onAddOrUpdate(updatedData);
    
        // Call the callback to fetch updated data after an item is updated
        if (onUpdateCallback) {
          onUpdateCallback();
        }
      };

// Define the CSS for the loading spinner
const override = css`
    display: block;
    margin: 0 auto;
`;

    return (
        <div className={`modal fade`} id="nightRead" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog ">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">Night | Meter Read</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className='d-flex flex-column gap-2'>
                            <div className='d-flex flex-column '>
                                <label htmlFor='day_read' className='w-50' >Enter Water Meter</label>
                                <input type='text' id='evening_read' onChange={(e) => setEvening_read(e.target.value)} className='p-2 bg-light rounded-3 w-100' placeholder='Enter Water Meter' required />
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr d-flex align-items-center gap-2 py-2 px-3 rounded-3 text-uppercase'>Cancel <IconPark path={'basil:cancel-outline'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2 '>
                                {loading ? (
                                    <RingLoader color={'#fff'} loading={loading} css={override} size={18} />
                                ) : (
                                    <>
                                    Save <IconPark path={'bi:save'} size={18} />
                                    </>
                                )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NightMeter