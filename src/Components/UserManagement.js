import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'john_doe', email: 'john@example.com', activity: 'Active' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com', activity: 'Inactive' },
  ]);

  const handleToggleActivity = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, activity: user.activity === 'Active' ? 'Inactive' : 'Active' } : user
    ));
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-management">
      <h3>User Management</h3>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <h4>{user.username}</h4>
            <p>{user.email}</p>
            <p>Status: {user.activity}</p>
            <button onClick={() => handleToggleActivity(user.id)} className="toggle-activity-button">
              {user.activity === 'Active' ? 'Deactivate' : 'Activate'}
            </button>
            <button onClick={() => handleDeleteUser(user.id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;