import React from 'react';
import HouseList from '../components/house/HouseList';

const HousePage = ({ 
    houses,
    onAddHouse,
    onEditHouse,
    onDeleteHouse,
    furnitureItems,
    onAssignFurniture
}) => {
    return (
        <div>
            <h1>House Inventory</h1>
            <HouseList
                houses={houses}
                onAddHouse={onAddHouse}
                onEditHouse={onEditHouse}
                onDeleteHouse={onDeleteHouse}
                furnitureItems={furnitureItems}
                onAssignFurniture={onAssignFurniture}
            />
        </div>
    );
};

export default HousePage;
