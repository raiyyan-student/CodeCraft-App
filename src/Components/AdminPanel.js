import React, { useState } from 'react';
import ContentManagement from './ContentManagement';
import UserManagement from './UserManagement';
import Analytics from './Analytics';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('content');

  const switchSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <button 
          className={`sidebar-button ${activeSection === 'content' ? 'active' : ''}`} 
          onClick={() => switchSection('content')}
        >
          Content Management
        </button>
        <button 
          className={`sidebar-button ${activeSection === 'users' ? 'active' : ''}`} 
          onClick={() => switchSection('users')}
        >
          User Management
        </button>
        <button 
          className={`sidebar-button ${activeSection === 'analytics' ? 'active' : ''}`} 
          onClick={() => switchSection('analytics')}
        >
          Analytics
        </button>
      </div>
      <div className="content-area">
        {activeSection === 'content' && <ContentManagement />}
        {activeSection === 'users' && <UserManagement />}
        {activeSection === 'analytics' && <Analytics />}
      </div>
    </div>
  );
};

export default AdminPanel;