import React, { useState } from 'react';
import HouseForm from './HouseForm';

const HouseList = ({ houses, onAddHouse, onEditHouse, onDeleteHouse }) => {
    const [showAddForm, setShowAddForm] = useState(false);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>House Inventory</h2>
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
                    Add House
                </button>
            </div>

            {showAddForm && (
                <HouseForm 
                    onSubmit={(newHouse) => {
                        onAddHouse(newHouse);
                        setShowAddForm(false);
                    }}
                    onCancel={() => setShowAddForm(false)}
                />
            )}

            <div style={{ marginTop: '20px' }}>
                {houses.length === 0 ? (
                    <p>No houses available</p>
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
                            <div>Address</div>
                            <div>Type</div>
                            <div>Rooms</div>
                            <div>Actions</div>
                        </div>
                        {houses.map(house => (
                        <div key={house.id} style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 1.5fr 1fr auto',
                            gap: '15px',
                            padding: '12px',
                            borderBottom: '1px solid #eee',
                            alignItems: 'center'
                        }}>
                            <div style={{ fontWeight: '500' }}>{house.address}</div>
                            <div>{house.type}</div>
                            <div>{house.rooms}</div>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <button 
                                    onClick={() => onEditHouse(house)}
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
                                    onClick={() => onDeleteHouse(house.id)}
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

export default HouseList;
