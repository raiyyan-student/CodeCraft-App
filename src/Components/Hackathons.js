import React from 'react';

const Hackathons = () => {
  // Mock data for hackathons
  const hackathons = [
    { id: 1, title: 'Summer Coding Challenge', date: 'Aug 20, 2024', prize: '$5000' },
    { id: 2, title: 'AI Hackathon', date: 'Sep 15, 2024', prize: '$10000' },
    { id: 3, title: 'Web Development Contest', date: 'Oct 10, 2024', prize: '$3000' },
  ];

  return (
    <div className="hackathons">
      <h3>Hackathons & Competitions</h3>
      <div className="hackathon-list">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="hackathon-item">
            <h4>{hackathon.title}</h4>
            <p>Date: {hackathon.date}</p>
            <p>Prize: {hackathon.prize}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;