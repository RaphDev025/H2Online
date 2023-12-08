import React, { useState, useEffect } from 'react'
import {IconPark} from 'Assets/SvgIcons'

const ViewItemModal = ({data, onUpdateCallback }) => {
    const [inv, setInv] = useState({
        _id: null,
        item_name: '',
        unit_price: 1,
        stock: 1,
        max_stock: 1,
        product_img: ''
    })

    useEffect(() => {
        if (data) {
            setInv({
                _id: data._id,
                item_name: data.item_name,
                unit_price: data.unit_price,
                stock: data.stock,
                max_stock: data.max_stock,
            });
        }
        console.log(data)
    }, [data])

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInv((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }
    
    const handleUpdate = async (data) => {
        try {
          // Assuming you have an API endpoint for updating an item
          const response = await fetch(`http://localhost:4000/api/products/${data}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(inv),
          });
    
          const updatedData = await response.json();
    
          if (response.ok) {
            console.log('Data updated successfully:', updatedData);
            alert('Data Updated');
    
            // Call the onUpdateCallback to fetch the latest inventory data
            onUpdateCallback();
    
          } else {
            alert('Error updating data: duplicate data');
          }
        } catch (error) {
          console.error('Error updating data:', error);
        } finally {
          // Close the modal or perform any other necessary actions
        }
      };

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
        setInv((prevData) => ({
            ...prevData,
            'product_img': base64,
        }));
    }

    const handleDelete = async (inv) => {
        try {
          const response = await fetch(`http://localhost:4000/api/products/${inv}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            console.log('Data deleted successfully');
            alert('Data Deleted');
    
            // Call the onUpdateCallback to fetch the latest inventory data
            onUpdateCallback();
          } else {
            alert('Error deleting data');
          }
        } catch (error) {
          console.error('Error deleting data:', error);
        } finally {
          // Close the modal or perform any other necessary actions
        }
      };

    return (
        <div className={`modal fade`} id="viewItem" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">View Item Details</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='d-flex flex-column gap-2 px-3'>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='item_name' >Enter Item</label>
                                    <input value={inv.item_name} onChange={handleChange} type='text' id='item_name' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Item' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='unit_price' >Unit Price</label>
                                    <input value={inv.unit_price} onChange={handleChange} type='number' min={1} id='unit_price' className='p-2 bg-light rounded-3 w-100' placeholder='Unit Price' required />
                                </div>
                            </div>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='stock' >Current Stock</label>
                                    <input type='number' value={inv.stock} onChange={handleChange} min={1} id='stock' className='p-2 bg-light rounded-3 w-100' placeholder='Current Stock' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='max_stock' >Max Stock</label>
                                    <input type='number' value={inv.max_stock} onChange={handleChange} min={1} id='max_stock' className='p-2 bg-light rounded-3 w-100' placeholder='Max Stock' required />
                                </div>
                            </div>
                            <div className='d-flex gap-2 flex-column'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='product_img' >Item Image</label>
                                    <input type='file' lable='Image' onChange={(e) => handleFileUpload(e)} id='product_img' className='p-2 bg-light rounded-3 w-100' placeholder='Item Image' required />
                                </div>
                                <div className="dropdown">
                                    <button className="button-itm-outline text-primary bg-light w-100 py-2 px-3 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Category </button>
                                    <ul className="dropdown-menu">
                                        <li><p className="dropdown-item">Water Containers</p></li>
                                        <li><p className="dropdown-item">Water Container Seals</p></li>
                                        <li><p className="dropdown-item">Reward</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' onClick={() => handleDelete(inv._id)} data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Delete <IconPark path={'material-symbols:delete-outline'} size={18} /></button>
                                <div className='d-flex gap-3'>
                                    <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Cancel <IconPark path={'ic:sharp-update-disabled'} size={18} /></button>
                                    <button type='button' onClick={() => handleUpdate(inv._id)} className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Update <IconPark path={'clarity:update-line'} size={18} /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewItemModal