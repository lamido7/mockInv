import React, { useState } from 'react';
import FurnitureForm from './FurnitureForm';

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
                    <div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 1.5fr 1fr auto',
                            gap: '15px',
                            padding: '12px',
                            borderBottom: '1px solid #eee',
                            alignItems: 'center',
                            fontWeight: 'bold'
                        }}>
                            <div>Name</div>
                            <div>Category</div>
                            <div>Quantity</div>
                            <div>Actions</div>
                        </div>
                        {items.map(item => (
                            <div key={item.id} style={{
                                display: 'grid',
                                gridTemplateColumns: '2fr 1.5fr 1fr auto',
                                gap: '15px',
                                padding: '12px',
                                borderBottom: '1px solid #eee',
                                alignItems: 'center'
                            }}>
                                <div style={{ fontWeight: '500' }}>{item.name}</div>
                                <div>{item.category}</div>
                                <div>{item.quantity}</div>
                                <div style={{ display: 'flex', gap: '5px' }}>
                                    <button 
                                        onClick={() => onEdit(item)}
                                        style={{
                                            padding: '3px 8px',
                                            backgroundColor: '#3498db',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(item.id)}
                                        style={{
                                            padding: '3px 8px',
                                            backgroundColor: '#e74c3c',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FurnitureList;
