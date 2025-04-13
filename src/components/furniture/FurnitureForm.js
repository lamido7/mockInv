import React, { useState, useEffect } from 'react';

const FurnitureForm = ({ item, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        quantity: '',
        description: '',
        roomLocation: '',
        type: ''
    });

    useEffect(() => {
        if (item) {
            setFormData({
                name: item.name || '',
                category: item.category || '',
                quantity: item.quantity || '',
                description: item.description || '',
                roomLocation: item.roomLocation || '',
                type: item.type || ''
            });
        }
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
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
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Room Location:</label>
                <select
                    name="roomLocation"
                    value={formData.roomLocation}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px' }}
                >
                    <option value="">Select Room</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Dining Room">Dining Room</option>
                </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Type:</label>
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px' }}
                >
                    <option value="">Select Type</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Quantity:</label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    min="0"
                    style={{ width: '100%', padding: '8px' }}
                />
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
                        cursor: 'pointer'
                    }}
                >
                    {item ? 'Update' : 'Add'} Item
                </button>
                {item && (
                    <button
                        type="button"
                        onClick={onCancel}
                        style={{
                            padding: '8px 15px',
                            backgroundColor: '#e74c3c',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default FurnitureForm;
