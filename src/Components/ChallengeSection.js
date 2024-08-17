import React, { useState } from 'react';
import ChallengeList from './ChallengeList';
import Collaboration from './Collaboration';
import Leaderboard from './Leaderboard';

const ChallengeSection = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [collaborate, setCollaborate] = useState(false);

  const challenges = [
    { id: 1, title: 'FizzBuzz', level: 'Beginner' },
    { id: 2, title: 'Palindrome Checker', level: 'Intermediate' },
    { id: 3, title: 'Sorting Algorithm', level: 'Advanced' },
  ];

  const handleSelectChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setCollaborate(false);
  };

  const handleCollaboration = () => {
    setCollaborate(true);
  };

  return (
    <div className="challenge-section">
      <h2>Coding Challenges</h2>
      <ChallengeList challenges={challenges} onSelectChallenge={handleSelectChallenge} />
      {selectedChallenge && !collaborate && (
        <div className="challenge-content">
          <h3>{selectedChallenge.title}</h3>
          <p>Difficulty: {selectedChallenge.level}</p>
          <button onClick={handleCollaboration} className="collaborate-button">
            Start Collaboration
          </button>
        </div>
      )}
      {collaborate && <Collaboration challenge={selectedChallenge} />}
      <Leaderboard />
    </div>
  );
};

export default ChallengeSection;