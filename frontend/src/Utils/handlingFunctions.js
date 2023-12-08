export const filterData = (data, query) => {
    return data.filter((item) => {
      // Assuming item.date is the property you're filtering on
      const lowerCaseDate = item.createdAt ? item.createdAt.toLowerCase() : '';
  
      return lowerCaseDate.includes(query.toLowerCase());
    });
  };

export const sortContents = (contents, order) => {
    const sortedContents = [...contents];
    if (order === 'Agua Coins') {
        sortedContents.sort((a, b) => b.coins - a.coins);
    } else if (order === 'Total Credits') {
        sortedContents.sort((a, b) => b.credit - a.credit);
    } else if (order === 'Latest') {
        sortedContents.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (order === 'Oldest') {
        sortedContents.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    return sortedContents;
}

export const handleItemClick = (customerName, isSelected, data, onItemSelected) => {
    if (customerName && !isSelected) {
        onItemSelected(data);
    }
}

export const handleActiveItem = (item, setItem) => {
    setItem(item)
}

export const iconPath = (item, navItem, fillIcon, outlineIcon) => {
    return item === navItem ? fillIcon : outlineIcon
}

export const formattedDate = (format, currentDateTime) => {
    return format(currentDateTime, 'MMM. dd, yyyy, E')
}

export const formattedTime = (format, currentDateTime) => {
    return format(currentDateTime, 'hh:mm a')
}

export const filterInventoryItems = (inventoryContents, getStockStatus, tab) => {
    if (tab === 'All') {
        return inventoryContents;
    } else {
        return inventoryContents.filter((item) => {
            const stockStatus = getStockStatus(item.stock, item.max);
            return stockStatus === tab;
        });
    }
}

export const getStockStatus = (stock, max) => {
    if (stock <= 0) {
        return 'Out of Stock';
    } else if (stock <= max * 0.2) {
        return 'Low Stock';
    } else if (stock <= max * 0.5) {
        return 'Half Stock';
    } else {
        return 'Full Stock';
    }
}

export const filteredTableData = (tableData, selectedTab, accessorFunction) => {
    return tableData.filter((data) => {
        if (selectedTab === 'All') {
            return true; // Show all data
        }
        const fieldValue = accessorFunction(data);
        return fieldValue.toLowerCase() === selectedTab.toLowerCase();
    });
}

export const calculateTotalPrice = (selectedItems = [], discount) => {
    const totalSubPrice = selectedItems.reduce((total, item) => total + item.sub_price, 0);
    const discountAmount = (discount / 100) * totalSubPrice;
    return (totalSubPrice - discountAmount).toFixed(2); // Apply the discount and format to two decimal places
}

export const calculateTotalSubPrice = (selectedItems = []) => {
    const totalSubPrice = selectedItems.reduce((total, item) => total + item.sub_price, 0);
    return totalSubPrice.toFixed(2); // Format the total sub-price to two decimal places
}

export const handleCustomerSelect = (customer, setCustomerName, sampleItems, setSelectedItems, setFilteredCustomers) => {
    // Update the input fields (excluding customer name)
    document.getElementById('delivery').value = customer.address;
    setCustomerName(customer.name)

    if (customer.gallon_Ownership) {
        const newItems = customer.gallon_Ownership.map((gallon) => {
            const item = sampleItems.find((sampleItem) => sampleItem.item === gallon.name);
            if (item) {
            return {
                ...item,
                qty: gallon.quantity,
                sub_price: item.unit_price * gallon.quantity,
            };
            }
            return null;
        });
        setSelectedItems(newItems.filter(Boolean));
    }
    // Clear the filtered customers and the input field
    setFilteredCustomers([]);
}

export const handleDeleteItem = (itemIndex, selectedItems, setSelectedItems) => {
    const updatedItems = selectedItems.filter((_, index) => index !== itemIndex);
    setSelectedItems(updatedItems);
}

export const handleClearCustomer = (setCustomerName, setDiscount, setSelectedItems, setPaymentMethods, setShipping) => {
    // Clear the input field
    setCustomerName('')
    document.getElementById('delivery').value = '';
    setDiscount(0)
    setSelectedItems([]); // Clear the selected items
    setPaymentMethods('')
    setShipping('')
}

export const handleInputChange = (e, setCustomerName, customers, setFilteredCustomers, setDiscount, setSelectedItems, setPaymentMethods, setShipping) => {
    const value = e.target.value;
    setCustomerName(value);

    // Filter customers based on the input
    const filtered = customers.filter((customer) =>
        customer.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCustomers(filtered);

    // Clear the filtered customers if the input is empty
    if (!value) {
        setDiscount(0);
        setFilteredCustomers([]);
        setSelectedItems([]);
        handleClearCustomer(
            setCustomerName,
            setDiscount,
            setSelectedItems,
            setPaymentMethods,
            setShipping
        );

        setPaymentMethods('');
        setShipping('');
        setCustomerName('');

        // Check if the 'delivery' element exists before accessing its 'value' property
        const deliveryInput = document.getElementById('delivery');
        if (deliveryInput) {
            deliveryInput.value = '';
        }
    }
}

export const handleDiscountChange = (e, setDiscount) => {
    setDiscount(e.target.value);
}

export const handleItemSelected = (selectedItem, selectedItems, setSelectedItems) => {
    // Check if the item is not already selected
    if (!selectedItems.some((item) => item.item === selectedItem.item)) {
        const selectedWithInitialQuantity = {
            ...selectedItem,
            qty: 1, // Set the initial quantity to 1
            sub_price: selectedItem.unit_price, // Calculate the sub price
        };
        setSelectedItems([...selectedItems, selectedWithInitialQuantity]);
    }
}

export const handleUpdateQuantity = (itemIndex, newQuantity, setSelectedItems, selectedItems) => {
    if (newQuantity >= 0) {
        const updatedItems = [...selectedItems];
        updatedItems[itemIndex].qty = newQuantity;
        updatedItems[itemIndex].sub_price = newQuantity * updatedItems[itemIndex].unit_price;
        setSelectedItems(updatedItems);
    }
}

export const calculateStatus = (stock, max) => {
    const stockPercentage = (stock / max) * 100;
    if (stockPercentage <= 20) {
        return 'Low';
    } else if (stockPercentage <= 50) {
        return 'Half';
    }
    return 'Full';
}