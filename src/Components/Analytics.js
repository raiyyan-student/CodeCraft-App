import React from 'react';

const Analytics = () => {
  return (
    <div className="analytics">
      <h3>Analytics</h3>
      <div className="analytics-item">
        <h4>User Engagement</h4>
        <p>Number of active users: 120</p>
        <p>Most popular tutorial: React Basics</p>
      </div>
      <div className="analytics-item">
        <h4>Tutorial Completion</h4>
        <p>Completed tutorials: 80%</p>
        <p>Incomplete tutorials: 20%</p>
      </div>
      <div className="analytics-item">
        <h4>Challenge Participation</h4>
        <p>Challenges completed: 45%</p>
        <p>Top performer: jane_smith</p>
      </div>
    </div>
  );
};

export default Analytics;