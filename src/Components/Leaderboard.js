import React from 'react';

const Leaderboard = () => {
  const leaders = [
    { id: 1, name: 'Alice', score: 1500 },
    { id: 2, name: 'Bob', score: 1200 },
    { id: 3, name: 'Charlie', score: 1100 },
  ];

  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <ul>
        {leaders.map((leader) => (
          <li key={leader.id}>
            {leader.name} - <span className="score">{leader.score}</span> points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;