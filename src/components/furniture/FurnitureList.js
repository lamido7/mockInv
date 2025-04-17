import React, { useState } from 'react';
import './FurnitureList.css';
import FurnitureCard from './FurnitureCard';
import FurnitureForm from './FurnitureForm';

const categories = [
    "Sofa",
    "Table",
    "Chair",
    "Bed",
    "Desk",
    "Storage",
    "Fridge",
    "Deep Freezer",
    "Gas Cooker",
    "Blender",
    "TV",
    "Other"
];

const FurnitureList = () => {
    const [showForm, setShowForm] = useState(false);

    const handleAddFurniture = () => {
        setShowForm(true);
    };

    const handleFormSubmit = (newFurniture) => {
        // Handle the submission of new furniture
        console.log(newFurniture);
        setShowForm(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Furniture Inventory</h2>
                <button 
                    onClick={handleAddFurniture}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#2ecc71',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add Furniture
                </button>
            </div>
            {showForm && (
                <FurnitureForm 
                    onSubmit={handleFormSubmit}
                    onCancel={() => setShowForm(false)}
                />
            )}
            <div className="furniture-grid">
                {categories.map((category, index) => (
                    <FurnitureCard 
                        key={index} 
                        item={{
                            name: category,
                            category: category,
                            brand: '', // Removed placeholder
                            purchaseDate: '', // Removed placeholder
                            price: '', // Removed placeholder
                            status: 'available' // Default status
                        }}
                        onEdit={() => {}}
                        onDelete={() => {}}
                    />
                ))}
            </div>
        </div>
    );
};

export default FurnitureList;
