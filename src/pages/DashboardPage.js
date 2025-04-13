import React from 'react';

const DashboardPage = ({ furnitureCount, housesCount }) => {
  return (
    <div>
      <h1>Inventory Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          width: '200px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3>Furniture Items</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{furnitureCount}</p>
        </div>
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          width: '200px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3>Houses</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{housesCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
