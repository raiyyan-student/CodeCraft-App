import React, { useState } from 'react';
import DiscussionForum from './DiscussionForum';
import ProjectShowcase from './ProjectShowcase';

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState('forum');

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="community-section">
      <h2>Community & Collaboration</h2>
      <div className="tab-buttons">
        <button 
          className={`tab-button ${activeTab === 'forum' ? 'active' : ''}`} 
          onClick={() => switchTab('forum')}
        >
          Discussion Forums
        </button>
        <button 
          className={`tab-button ${activeTab === 'showcase' ? 'active' : ''}`} 
          onClick={() => switchTab('showcase')}
        >
          Project Showcase
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'forum' && <DiscussionForum />}
        {activeTab === 'showcase' && <ProjectShowcase />}
      </div>
    </div>
  );
};

export default CommunitySection;