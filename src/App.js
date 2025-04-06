import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  cursor: pointer;
  color: #333;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  
  &:hover {
    color: #666;
  }
`;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const navigateToProjects = () => {
    setCurrentPage('projects');
    setSelectedProjectId(null);
    setSelectedBlogId(null);
  };

  const navigateToProjectDetail = (id) => {
    setCurrentPage('projects');
    setSelectedProjectId(id);
    setSelectedBlogId(null);
  };

  const navigateToBlogPost = (id) => {
    setCurrentPage('blog');
    setSelectedBlogId(id);
    setSelectedProjectId(null);
  };

  const renderContent = () => {
    if (selectedProjectId !== null) {
      return <ProjectDetail 
        id={selectedProjectId} 
        onBack={() => setSelectedProjectId(null)} 
      />;
    }

    if (selectedBlogId !== null) {
      return <BlogDetail 
        id={selectedBlogId} 
        onBack={() => setSelectedBlogId(null)} 
      />;
    }

    switch (currentPage) {
      case 'home':
        return <Home 
          onNavigateToProjects={navigateToProjects}
          onNavigateToProjectDetail={navigateToProjectDetail}
        />;
      case 'projects':
        return <Projects onProjectClick={(id) => setSelectedProjectId(id)} />;
      case 'blog':
        return <Blog onBlogPostClick={(id) => setSelectedBlogId(id)} />;
      case 'resume':
        return <Resume />;
      default:
        return <Home />;
    }
  }

  return (
    <AppContainer>
      <Nav>
        <NavList>
          <NavItem 
            active={currentPage === 'home'} 
            onClick={() => {
              setCurrentPage('home');
              setSelectedProjectId(null);
              setSelectedBlogId(null);
            }}
          >
            Home
          </NavItem>
          <NavItem 
            active={currentPage === 'projects'} 
            onClick={() => {
              setCurrentPage('projects');
              setSelectedProjectId(null);
              setSelectedBlogId(null);
            }}
          >
            Projects
          </NavItem>
          <NavItem 
            active={currentPage === 'blog'} 
            onClick={() => {
              setCurrentPage('blog');
              setSelectedProjectId(null);
              setSelectedBlogId(null);
            }}
          >
            Blog
          </NavItem>
          <NavItem 
            active={currentPage === 'resume'} 
            onClick={() => {
              setCurrentPage('resume');
              setSelectedProjectId(null);
              setSelectedBlogId(null);
            }}
          >
            Resume
          </NavItem>
        </NavList>
      </Nav>
      {renderContent()}
    </AppContainer>
  );
}

export default App; 