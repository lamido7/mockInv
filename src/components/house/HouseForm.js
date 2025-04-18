import React, { useState, useEffect } from 'react';

const barracksOptions = [
    "Niger Barracks",
    "Mogadishu Barracks",
    "Kado Barracks",
    "Kubwa Barracks",
    "Karshi Barracks",
    "Naval Unit"
];

const HouseForm = ({ house, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        address: '',
        type: '',
        rooms: '',
        block: '',
        houseNumber: ''
    });

    useEffect(() => {
        if (house) {
            setFormData({
                address: house.address || '',
                type: house.type || '',
                rooms: house.rooms || '',
                block: house.block || '',
                houseNumber: house.houseNumber || ''
            });
        }
    }, [house]);

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
            <h2>{house ? 'Edit House' : 'Add New House'}</h2>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
                <select
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px' }}
                >
                    <option value="">Select address</option>
                    {barracksOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
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
                    <option value="">Select type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Villa">Villa</option>
                </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Rooms:</label>
                <input
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    required
                    min="1"
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Block:</label>
                <input
                    type="text"
                    name="block"
                    value={formData.block}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>House Number:</label>
                <input
                    type="text"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleChange}
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
                    {house ? 'Update' : 'Add'} House
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
                        cursor: 'pointer'
                    }}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default HouseForm;
