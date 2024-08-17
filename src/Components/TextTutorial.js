import React from 'react';

const TextTutorial = ({ title }) => {
  return (
    <div className="text-tutorial">
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque, nisl ut fermentum venenatis, lectus nisi bibendum ligula,
        non vulputate elit odio ac lorem. Fusce vel pulvinar est, et consequat
        est. Nam vehicula lorem id lacinia tempor.
      </p>
      {/* Add more content or fetch tutorial content dynamically */}
    </div>
  );
};

export default TextTutorial;