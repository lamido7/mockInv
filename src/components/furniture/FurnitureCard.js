import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FurnitureCard.css'; // Importing the CSS file for hover effect

const FurnitureCard = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (item.category === 'Sofa') {
            navigate('/furniture/sofa'); // Redirect to the SofaList
        }
    };

    return (
        <div className="furniture-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <h3>{item.name}</h3>
            <h4>Assigned: {item.assignedCount || 0}</h4>
            <h4>Unassigned: {item.unassignedCount || 0}</h4>
        </div>
    );
};

export default FurnitureCard;
