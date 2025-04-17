import React from 'react';
import FurnitureCard from '../furniture/FurnitureCard';

const SofaList = ({ items }) => {
    // Filter items to only include those in the "Sofa" category
    const sofaItems = items.filter(item => item.category === 'Sofa');

    return (
        <div>
            <h2>Sofa List</h2>
            <div>
                {sofaItems.map((item, index) => (
                    <FurnitureCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default SofaList;
