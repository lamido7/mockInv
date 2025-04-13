import React from 'react';

const InventoryList = ({ items, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Furniture Inventory</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryList;
