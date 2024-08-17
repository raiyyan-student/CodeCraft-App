import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    username: 'John Doe',
    email: 'johndoe@example.com',
    progress: 75,
    badges: ['Beginner', 'Intermediate'],
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <form onSubmit={handleUpdate} className="profile-form">
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button type="submit" className="profile-button">Update Profile</button>
      </form>
      <div className="profile-stats">
        <h3>Progress</h3>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${user.progress}%` }}
          ></div>
        </div>
        <h3>Badges</h3>
        <ul>
          {user.badges.map((badge, index) => (
            <li key={index}>{badge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;