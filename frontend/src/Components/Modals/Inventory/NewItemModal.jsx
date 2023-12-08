import React, { useState } from 'react'
import {IconPark} from 'Assets/SvgIcons'

const NewItemModal = ({onUpdateCallback }) => {
    const [formData, setFormData] = useState({
        item_name: '',
        unit_price: 0,
        stock: 0,
        max_stock: 0,
        category: '',
        product_img: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
    // If it's any other field, update formData normally
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));        
    }

    const handleCategory = (category) => {
        setFormData((prevData) => ({
            ...prevData,
            category: category,
        }));
    } 

    const handleCancel = () => {
        // Clear the form data
        setFormData({
            item_name: '',
            unit_price: 0,
            stock: 0,
            max_stock: 0,
            category: '',
            product_img: ''
        });
        // Close the modal if needed
        // You might need to use the appropriate method to close the modal based on your modal library or implementation
        // For Bootstrap, you can use something like: document.getElementById('staticBackdrop').modal('hide');
    }

    
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file)
    setFormData((prevData) => ({
        ...prevData,
        'product_img': base64,
    }));
}

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if required fields are empty before submitting
        if (!formData.item_name || !formData.unit_price || !formData.stock || !formData.max_stock || !formData.category) {
            alert('Please fill in all required fields.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:4000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            console.log('Submitting data:', formData);
    
            if (!response.ok) {
                setFormData({
                    item_name: '',
                    unit_price: 0,
                    stock: 0,
                    max_stock: 0,
                    category: ''
                })
                alert('Failed to create product')
                throw new Error('Failed to create product')
            }
    
            // Optionally, you can handle success, close the modal, or update the UI here
            alert('Product created successfully')
            setFormData({
                item_name: '',
                unit_price: 0,
                stock: 0,
                max_stock: 0,
                category: '', 
                product_img: '',
            })
            onUpdateCallback ()
        } catch (error) {
            console.log('Error creating product:', error);
        }
    }    

    return (
        <div className={`modal fade`} id="newItem" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">New Item</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className='d-flex flex-column gap-2 px-3'>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='item_name' >Enter Item</label>
                                    <input type='text' onChange={handleChange} id='item_name' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Item' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='unit_price' >Unit Price</label>
                                    <input type='number' min={1} onChange={handleChange} id='unit_price' className='p-2 bg-light rounded-3 w-100' placeholder='Unit Price' required />
                                </div>
                            </div>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='stock' >Current Stock</label>
                                    <input type='number' min={1} onChange={handleChange} id='stock' className='p-2 bg-light rounded-3 w-100' placeholder='Current Stock' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='max_stock' >Max Stock</label>
                                    <input type='number' min={1} onChange={handleChange} id='max_stock' className='p-2 bg-light rounded-3 w-100' placeholder='Max Stock' required />
                                </div>
                            </div>
                            <div className='d-flex gap-2 flex-column'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='product_img' >Item Image</label>
                                    <input type='file' lable='Image' onChange={(e) => handleFileUpload(e)} id='product_img' className='p-2 bg-light rounded-3 w-100' accept='.jpeg, .png, .jpg' placeholder='Item Image' />
                                </div>
                                <div className="dropdown">
                                    <button className="button-itm-outline text-primary bg-light w-100 py-2 px-3 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> {formData.category || 'Category'} </button>
                                    <ul className="dropdown-menu">
                                        <li><button type='button' onClick={() => handleCategory('Water Containers')} className="dropdown-item">Water Containers</button></li>
                                        <li><button type='button' onClick={() => handleCategory('Water Container Seals')} className="dropdown-item">Water Container Seals</button></li>
                                        <li><button type='button' onClick={() => handleCategory('Reward')} className="dropdown-item">Reward</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' onClick={handleCancel} data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Cancel <IconPark path={'basil:cancel-outline'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2' data-bs-dismiss="modal">Create <IconPark path={'mdi:cash-check'} size={18} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewItemModal