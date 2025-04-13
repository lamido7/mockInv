import React from 'react';
import FurnitureList from '../components/furniture/FurnitureList';

const FurniturePage = ({ 
    items,
    onEditItem,
    onDeleteItem,
    onAddItem
}) => {
    return (
        <div>
            <h1>Furniture Inventory</h1>
            <FurnitureList 
                items={items} 
                onEdit={onEditItem} 
                onDelete={onDeleteItem}
                onAdd={onAddItem}
            />
        </div>
    );
};

export default FurniturePage;
