import React from 'react';

const Recommendations = () => {
  // Mock data for recommendations
  const recommendedItems = [
    { id: 1, title: 'Advanced ReactJS', type: 'Tutorial', skillLevel: 'Intermediate' },
    { id: 2, title: 'Data Structures Challenge', type: 'Challenge', skillLevel: 'Advanced' },
    { id: 3, title: 'Intro to Python', type: 'Tutorial', skillLevel: 'Beginner' },
  ];

  return (
    <div className="recommendations">
      <h3>AI-Driven Recommendations</h3>
      <div className="recommendations-list">
        {recommendedItems.map((item) => (
          <div key={item.id} className="recommendation-item">
            <h4>{item.title}</h4>
            <p>Type: {item.type}</p>
            <p>Skill Level: {item.skillLevel}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;