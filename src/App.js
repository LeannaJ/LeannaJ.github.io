import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  cursor: pointer;
  color: ${props => props.active ? '#007bff' : '#333'};
  font-weight: ${props => props.active ? '600' : '400'};
  
  &:hover {
    color: #007bff;
  }
`;

const Content = styled.main`
  padding-top: 4rem;
`;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedProjectId(null);
  };

  const navigateToProjects = () => {
    setCurrentPage('projects');
    setSelectedProjectId(null);
  };

  const navigateToResume = () => {
    setCurrentPage('resume');
    setSelectedProjectId(null);
  };

  const navigateToProjectDetail = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return selectedProjectId ? (
          <ProjectDetail projectId={selectedProjectId} />
        ) : (
          <Projects onProjectClick={navigateToProjectDetail} />
        );
      case 'resume':
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <AppContainer>
      <Navigation>
        <NavList>
          <NavItem active={currentPage === 'home'} onClick={navigateToHome}>
            Home
          </NavItem>
          <NavItem active={currentPage === 'projects'} onClick={navigateToProjects}>
            Projects
          </NavItem>
          <NavItem active={currentPage === 'resume'} onClick={navigateToResume}>
            Resume
          </NavItem>
        </NavList>
      </Navigation>
      <Content>
        {renderContent()}
      </Content>
    </AppContainer>
  );
}

export default App; 