import React from 'react';

const ResponsiveComponent = () => {
  return (
    <div className="flex-container">
      <div className="flex-item" style={{ backgroundColor: '#3498db', padding: '20px', borderRadius: '8px' }}>
        <h2>Section 1</h2>
        <p>This section will adjust based on the screen size.</p>
      </div>
      <div className="flex-item" style={{ backgroundColor: '#e74c3c', padding: '20px', borderRadius: '8px' }}>
        <h2>Section 2</h2>
        <p>This section will also adjust based on the screen size.</p>
      </div>
    </div>
  );
};

export default ResponsiveComponent;