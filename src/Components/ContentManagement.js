import React, { useState } from 'react';

const ContentManagement = () => {
  const [tutorials, setTutorials] = useState([
    { id: 1, title: 'React Basics', description: 'Introduction to React.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.' },
  ]);

  const [newTutorial, setNewTutorial] = useState({ title: '', description: '' });

  const handleAddTutorial = () => {
    setTutorials([...tutorials, { id: tutorials.length + 1, ...newTutorial }]);
    setNewTutorial({ title: '', description: '' });
  };

  const handleDeleteTutorial = (id) => {
    setTutorials(tutorials.filter((tutorial) => tutorial.id !== id));
  };

  return (
    <div className="content-management">
      <h3>Content Management</h3>
      <div className="content-list">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="content-item">
            <h4>{tutorial.title}</h4>
            <p>{tutorial.description}</p>
            <button onClick={() => handleDeleteTutorial(tutorial.id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
      <div className="new-content">
        <input
          type="text"
          placeholder="Tutorial title..."
          value={newTutorial.title}
          onChange={(e) => setNewTutorial({ ...newTutorial, title: e.target.value })}
        />
        <textarea
          placeholder="Tutorial description..."
          value={newTutorial.description}
          onChange={(e) => setNewTutorial({ ...newTutorial, description: e.target.value })}
        />
        <button onClick={handleAddTutorial} className="add-content-button">Add Tutorial</button>
      </div>
    </div>
  );
};

export default ContentManagement;