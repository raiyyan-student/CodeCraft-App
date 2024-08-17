import React from 'react';

const AccessibilityComponent = () => {
  return (
    <div className="accessible-container">
      <button className="accessible-button" aria-label="Click to learn more">Learn More</button>
      <a href="#more-info" className="accessible-link" aria-label="Read more about this topic">Read More</a>
    </div>
  );
};

export default AccessibilityComponent;