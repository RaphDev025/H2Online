import React, { useState } from 'react'
import {IconPark} from 'Assets/SvgIcons'

const NewCustomerModal = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        gender: '',
        address: '',
        email: '',
        password: '',
        user_type: 'customer'
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
    // If it's any other field, update formData normally
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if required fields are empty before submitting
        if (!formData.first_name || !formData.last_name || !formData.phone || !formData.email || !formData.password) {
            alert('Please fill in all required fields.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:4000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            console.log('Submitting data:', formData);
    
            if (!response.ok) {
                throw new Error('Failed to create customer');
            }
    
            // Optionally, you can handle success, close the modal, or update the UI here
            alert('Customer created successfully');
        } catch (error) {
            console.log('Error creating customer:', error);
        }
    }    

    const handleGenderChange = (selectedGender) => {
        setFormData((prevData) => ({
            ...prevData,
            gender: selectedGender,
        }));
    }

    const handleCancel = () => {
        // Clear the form data
        setFormData({
            first_name: '',
            last_name: '',
            phone: '',
            gender: '',
            address: '',
            email: '',
            password: '',
            user_type: 'customer'
        });
        // Close the modal if needed
        // You might need to use the appropriate method to close the modal based on your modal library or implementation
        // For Bootstrap, you can use something like: document.getElementById('staticBackdrop').modal('hide');
    }

    return (
    <>
        <div className={`modal fade`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog ">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <div>
                            <h1 className="modal-title fs-6" id="staticBackdropLabel">Create New Customer</h1>
                            <figcaption className=" header-txt fw-light">To manage better customer relationship</figcaption>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className='d-flex flex-column gap-2'>
                            <div className='d-flex gap-3'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='first_name' >First Name</label>
                                    <input type='text' id='first_name' onChange={handleChange} className='p-2 bg-light rounded-3 w-100' placeholder='First Name' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='last_name' >Last Name</label>
                                    <input type='text' id='last_name' onChange={handleChange} className='p-2 bg-light rounded-3 w-100' placeholder='Last Name' required />
                                </div>
                            </div>
                            <div className='d-flex gap-3 align-items-end justify-content-end'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='phone' >Contact No.#</label>
                                    <input type='telephone' onChange={handleChange} id='phone' className='p-2 bg-light rounded-3 w-100' placeholder='Contact No.#' required/>
                                </div>
                                <div className="dropdown w-100">
                                    <button className="btn w-100 pt-2 button-itm-outline text-primary bg-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {formData.gender || 'Gender'}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button type='button' onClick={() => handleGenderChange('Male')} className="dropdown-item">Male</button></li>
                                        <li><button type='button' onClick={() => handleGenderChange('Female')} className="dropdown-item">Female</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label htmlFor='address' >Address</label>
                                <input type='text' onChange={handleChange} id='address' className='p-2 bg-light rounded-3 w-100' placeholder='Address' required />
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='email' >Email</label>
                                    <input type='email' onChange={handleChange} id='email' className='p-2 bg-light rounded-3 w-100' placeholder='Email' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='pass' >Password</label>
                                    <input type='password' onChange={handleChange} id='password' className='p-2 bg-light rounded-3 w-100' placeholder='Password' required/>
                                </div>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" onClick={handleCancel} className='button-itm-outline-dngr py-2 px-3 gap-2 d-flex align-items-center rounded-3 text-uppercase'>Cancel <IconPark path={'basil:cancel-outline'} size={18} /></button>
                                <button type='submit' data-bs-dismiss="modal" aria-label="Close" className='button-itm py-2 px-3 rounded-3 d-flex align-items-center gap-2 text-uppercase'>Create <IconPark path={'gridicons:create'} size={18} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default NewCustomerModal