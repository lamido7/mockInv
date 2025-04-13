import React, { useState, useEffect } from 'react';

const EditItemForm = ({ item, onUpdate, onCancel }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (item) {
            setName(item.name);
            setDescription(item.description);
        }
    }, [item]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ ...item, name, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Update</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EditItemForm;
