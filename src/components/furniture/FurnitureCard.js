import React from 'react';

const FurnitureCard = ({ item, onEdit, onDelete }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px 0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div style={{ marginTop: '10px' }}>
                <button 
                    onClick={() => onEdit(item)}
                    style={{
                        marginRight: '10px',
                        padding: '5px 10px',
                        backgroundColor: '#3498db',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Edit
                </button>
                <button 
                    onClick={() => onDelete(item.id)}
                    style={{
                        padding: '5px 10px',
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FurnitureCard;
