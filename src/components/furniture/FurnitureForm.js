import React, { useState, useEffect } from 'react';

const FurnitureForm = ({ item, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    brand: '',
    purchaseDate: '',
    price: '',
    status: 'available',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || '',
        category: item.category || '',
        brand: item.brand || '',
        purchaseDate: item.purchaseDate || '',
        price: item.price || '',
        status: item.status || 'available',
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.purchaseDate) newErrors.purchaseDate = 'Purchase Date is required';
    if (formData.price === '' || isNaN(formData.price) || Number(formData.price) < 0) newErrors.price = 'Price must be a non-negative number';
    if (!formData.status) newErrors.status = 'Status is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px 0',
    }}>
      <h2>{item ? 'Edit Furniture' : 'Add New Furniture'}</h2>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.name && <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.name}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="">Select Category</option>
          <option value="Sofa">Sofa</option>
          <option value="Table">Table</option>
          <option value="Chair">Chair</option>
          <option value="Bed">Bed</option>
          <option value="Desk">Desk</option>
          <option value="Storage">Storage</option>
          <option value="Fridge">Fridge</option>
          <option value="Deep Freezer">Deep Freezer</option>
          <option value="Gas Cooker">Gas Cooker</option>
          <option value="Blender">Blender</option>
          <option value="TV">TV</option>
          <option value="Other">Other</option>
        </select>
        {errors.category && <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.category}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Brand:</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Purchase Date:</label>
        <input
          type="date"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.purchaseDate && <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.purchaseDate}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.price && <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.price}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="available">Available</option>
          <option value="assigned">Assigned</option>
          <option value="maintenance">Maintenance</option>
        </select>
        {errors.status && <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.status}</div>}
      </div>

      <div>
        <button
          type="submit"
          style={{
            marginRight: '10px',
            padding: '8px 15px',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {item ? 'Update' : 'Add'} Item
        </button>
        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: '8px 15px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FurnitureForm;
