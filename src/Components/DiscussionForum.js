import React, { useState } from 'react';

const DiscussionForum = () => {
  const [topics, setTopics] = useState([
    { id: 1, title: 'How to start with React?', replies: 5 },
    { id: 2, title: 'Best practices for JavaScript', replies: 8 },
    { id: 3, title: 'CSS Grid vs Flexbox', replies: 12 },
  ]);
  const [newTopic, setNewTopic] = useState('');

  const handleNewTopic = () => {
    setTopics([...topics, { id: topics.length + 1, title: newTopic, replies: 0 }]);
    setNewTopic('');
  };

  return (
    <div className="discussion-forum">
      <h3>Discussion Forums</h3>
      <div className="forum-topics">
        {topics.map((topic) => (
          <div key={topic.id} className="forum-topic">
            <h4>{topic.title}</h4>
            <p>{topic.replies} replies</p>
          </div>
        ))}
      </div>
      <div className="new-topic">
        <input
          type="text"
          placeholder="Start a new topic..."
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />
        <button onClick={handleNewTopic} className="add-topic-button">Add Topic</button>
      </div>
    </div>
  );
};

export default DiscussionForum;