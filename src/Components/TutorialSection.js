import React, { useState } from 'react';
import VideoTutorial from './VideoTutorial';
import TextTutorial from './TextTutorial';
import CodeEditor from './CodeEditor';

const TutorialSection = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [progress, setProgress] = useState(0);

  const tutorials = [
    { id: 1, title: 'Introduction to React', type: 'video' },
    { id: 2, title: 'JavaScript Basics', type: 'text' },
    { id: 3, title: 'CSS Fundamentals', type: 'video' },
    { id: 4, title: 'Building a To-Do App', type: 'text' },
  ];

  const handleSelectTutorial = (tutorial) => {
    setSelectedTutorial(tutorial);
  };

  const updateProgress = () => {
    setProgress(progress + 25);
  };

  return (
    <div className="tutorial-section">
      <h2>Programming Tutorials</h2>
      <ul className="tutorial-list">
        {tutorials.map((tutorial) => (
          <li key={tutorial.id} onClick={() => handleSelectTutorial(tutorial)}>
            {tutorial.title}
          </li>
        ))}
      </ul>

      {selectedTutorial && (
        <div className="tutorial-content">
          {selectedTutorial.type === 'video' ? (
            <VideoTutorial title={selectedTutorial.title} />
          ) : (
            <TextTutorial title={selectedTutorial.title} />
          )}
          <CodeEditor />
          <button onClick={updateProgress} className="progress-button">
            Mark as Complete
          </button>
        </div>
      )}

      <div className="progress-tracking">
        <h3>Course Progress</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;