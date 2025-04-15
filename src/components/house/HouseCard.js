import React, { useState, useEffect } from 'react';

const HouseCard = ({ house, onEdit, onDelete, furnitureItems = [], onAssignFurniture }) => {
    const [showAssign, setShowAssign] = useState(false);
    const [assignments, setAssignments] = useState({}); // { roomName: furnitureId }

    // Initialize assignments if house has existing furniture assignments
    useEffect(() => {
        if (house.furnitureAssignments) {
            setAssignments(house.furnitureAssignments);
        }
    }, [house.furnitureAssignments]);

    const handleAssignmentChange = (room, furnitureId) => {
        const newAssignments = { ...assignments, [room]: furnitureId };
        setAssignments(newAssignments);
        if (onAssignFurniture) {
            onAssignFurniture(house.id, newAssignments);
        }
    };

    // Generate room names as Room 1, Room 2, ... based on house.rooms count
    const rooms = Array.from({ length: house.rooms }, (_, i) => `Room ${i + 1}`);

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px 0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h3>{house.address}</h3>
            <p>Block: {house.block || '-'}</p>
            <p>House Number: {house.houseNumber || '-'}</p>
            <p>Rooms: {house.rooms}</p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                <button
                    onClick={() => onEdit(house)}
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
                    onClick={() => onDelete(house.id)}
                    style={{
                        marginRight: '10px',
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
                <button
                    onClick={() => setShowAssign(!showAssign)}
                    style={{
                        padding: '5px 10px',
                        backgroundColor: '#2ecc71',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {showAssign ? 'Cancel' : 'Assign Furniture'}
                </button>
            </div>
            {showAssign && (
                <div style={{ marginTop: '12px' }}>
                    {rooms.map(room => (
                        <div key={room} style={{ marginBottom: '8px' }}>
                            <label htmlFor={`${house.id}-${room}`} style={{ marginRight: '8px' }}>{room}:</label>
                            <select
                                id={`${house.id}-${room}`}
                                value={assignments[room] || ''}
                                onChange={(e) => handleAssignmentChange(room, e.target.value)}
                            >
                                <option value="">-- Select Furniture --</option>
                                {furnitureItems.map(furniture => (
                                    <option key={furniture.id} value={furniture.id}>
                                        {furniture.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HouseCard;
