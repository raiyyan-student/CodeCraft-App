import React from 'react';

const ChallengeList = ({ challenges, onSelectChallenge }) => {
  return (
    <ul className="challenge-list">
      {challenges.map((challenge) => (
        <li key={challenge.id} onClick={() => onSelectChallenge(challenge)}>
          {challenge.title} - <span className="challenge-level">{challenge.level}</span>
        </li>
      ))}
    </ul>
  );
};

export default ChallengeList;