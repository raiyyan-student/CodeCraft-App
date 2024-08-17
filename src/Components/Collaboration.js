import React, { useState } from 'react';

const Collaboration = ({ challenge }) => {
  const [code, setCode] = useState("// Start coding here...");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="collaboration-section">
      <h3>Collaborating on: {challenge.title}</h3>
      <textarea
        className="code-area"
        value={code}
        onChange={handleCodeChange}
        rows="10"
      />
      <button className="submit-button">Submit Code</button>
    </div>
  );
};

export default Collaboration;