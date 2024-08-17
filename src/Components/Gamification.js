import React, { useState, useEffect } from 'react';

const Gamification = () => {
  const [badges, setBadges] = useState([
    { id: 1, title: 'Beginner', description: 'Completed your first tutorial', icon: '🥇' },
    { id: 2, title: 'Challenger', description: 'Solved your first challenge', icon: '🏅' },
  ]);

  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(50);

  useEffect(() => {
    // Simulate XP calculation
    if (xp >= 100) {
      setLevel(level + 1);
      setXp(xp - 100);
    }
  }, [xp, level]);

  const handleEarnXp = () => {
    setXp(xp + 20); // Simulate earning XP
  };

  return (
    <div className="gamification">
      <h3>Gamification & Badges</h3>

      <div className="level-xp">
        <h4>Level: {level}</h4>
        <p>XP: {xp}/100</p>
        <div className="xp-bar">
          <div className="xp-progress" style={{ width: `${(xp / 100) * 100}%` }}></div>
        </div>
      </div>

      <div className="badges-section">
        <h4>Your Badges</h4>
        <div className="badges-list">
          {badges.map((badge) => (
            <div key={badge.id} className="badge-item">
              <div className="badge-icon">{badge.icon}</div>
              <div className="badge-details">
                <h5>{badge.title}</h5>
                <p>{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="earn-xp-button" onClick={handleEarnXp}>
        Earn XP
      </button>
    </div>
  );
};

export default Gamification;