import React, { useState } from 'react';
import './FurnitureList.css';
import FurnitureForm from './FurnitureForm';
import FurnitureCard from './FurnitureCard';

const FurnitureList = ({ items, onEdit, onDelete, onAdd }) => {
    const [showAddForm, setShowAddForm] = useState(false);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Furniture Inventory</h2>
                <button 
                    onClick={() => setShowAddForm(true)}
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

            {showAddForm && (
                <FurnitureForm 
                    onSubmit={(newItem) => {
                        onAdd(newItem);
                        setShowAddForm(false);
                    }}
                    onCancel={() => setShowAddForm(false)}
                />
            )}

            <div style={{ marginTop: '20px' }}>
                {items.length === 0 ? (
                    <p>No furniture items available</p>
                ) : (
                    <div className="furniture-grid">
                        {items.map(item => (
                            <FurnitureCard 
                                key={item.id} 
                                item={item} 
                                onEdit={onEdit} 
                                onDelete={onDelete} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FurnitureList;
