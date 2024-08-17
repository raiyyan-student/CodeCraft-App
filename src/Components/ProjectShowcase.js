import React, { useState } from 'react';

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Personal Portfolio', description: 'A portfolio website built with ReactJS and CSS.' },
    { id: 2, title: 'E-commerce Store', description: 'An online store built with MERN stack.' },
    { id: 3, title: 'Chat Application', description: 'A real-time chat app using WebSocket.' },
  ]);

  const [newProject, setNewProject] = useState({ title: '', description: '' });

  const handleAddProject = () => {
    setProjects([...projects, { id: projects.length + 1, ...newProject }]);
    setNewProject({ title: '', description: '' });
  };

  return (
    <div className="project-showcase">
      <h3>Project Showcase</h3>
      <div className="showcase-projects">
        {projects.map((project) => (
          <div key={project.id} className="showcase-project">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <div className="new-project">
        <input
          type="text"
          placeholder="Project title..."
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <textarea
          placeholder="Project description..."
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <button onClick={handleAddProject} className="add-project-button">Add Project</button>
      </div>
    </div>
  );
};

export default ProjectShowcase;