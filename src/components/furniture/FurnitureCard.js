import React from 'react';

const statusColors = {
    available: '#2ecc71', // green
    assigned: '#3498db',  // blue
    maintenance: '#e67e22' // orange
};

const FurnitureCard = ({ item, onEdit, onDelete }) => {
    const statusColor = statusColors[item.status] || '#7f8c8d'; // default gray

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px 0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h3>{item.name}</h3>
            <p>Brand: {item.brand}</p>
            <p>Category: {item.category}</p>
            <p>Purchase Date: {item.purchaseDate}</p>
            <p>Price: ${item.price}</p>
            <div style={{
                display: 'inline-block',
                padding: '4px 8px',
                borderRadius: '12px',
                backgroundColor: statusColor,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.8rem',
                margin: '8px 0'
            }}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </div>
            {item.assignedLocation && (
                <p>Assigned Location: {item.assignedLocation}</p>
            )}
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
