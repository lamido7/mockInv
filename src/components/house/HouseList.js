import React, { useState } from 'react';
import HouseForm from './HouseForm';
import HouseCard from './HouseCard';
import './HouseList.css';

const HouseList = ({ houses, onAddHouse, onEditHouse, onDeleteHouse, furnitureItems, onAssignFurniture }) => {
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
                    <div className="house-grid">
                        {houses.map(house => (
                            <HouseCard 
                                key={house.id} 
                                house={house} 
                                onEdit={onEditHouse} 
                                onDelete={onDeleteHouse} 
                                furnitureItems={furnitureItems}
                                onAssignFurniture={onAssignFurniture}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HouseList;
