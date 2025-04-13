import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FurniturePage from './pages/FurniturePage';
import HousePage from './pages/HousePage';
import DashboardPage from './pages/DashboardPage';
import SideNav from './components/SideNav';

const App = () => {
    const [items, setItems] = useState([]);
    const [houses, setHouses] = useState([]);
    const [editingItem, setEditingItem] = useState(null);


    const handleEditItem = (item) => {
        setEditingItem(item);
    };

    const handleUpdateItem = (updatedItem) => {
        setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
        setEditingItem(null);
    };

    const handleDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleCancelEdit = () => {
        setEditingItem(null);
    };

    const handleAddItem = (newItem) => {
        setItems([...items, { id: Date.now(), ...newItem }]);
    };

    const handleAddHouse = (newHouse) => {
        setHouses([...houses, { id: Date.now(), ...newHouse }]);
    };

    const handleEditHouse = (updatedHouse) => {
        setHouses(houses.map(house => 
            house.id === updatedHouse.id ? updatedHouse : house
        ));
    };

    const handleDeleteHouse = (id) => {
        setHouses(houses.filter(house => house.id !== id));
    };

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <SideNav />
                <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
                    <Routes>
                        <Route path="/" element={
                            <DashboardPage
                                furnitureCount={items.length}
                                housesCount={houses.length}
                            />
                        } />
                        <Route path="/furniture" element={
                            <FurniturePage
                                items={items}
                                onEditItem={handleEditItem}
                                onDeleteItem={handleDeleteItem}
                                onAddItem={handleAddItem}
                            />
                        } />
                        <Route path="/houses" element={
                            <HousePage
                                houses={houses}
                                onAddHouse={handleAddHouse}
                                onEditHouse={handleEditHouse}
                                onDeleteHouse={handleDeleteHouse}
                            />
                        } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
