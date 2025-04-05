import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
// import Blog from './pages/Blog';  // Blog import 주석 처리

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: #666;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const AppContent = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    navigate(`/projects/${projectId}`);
  };

  const handleBack = () => {
    setSelectedProject(null);
    navigate('/projects');
  };

  return (
    <AppContainer>
      <Navigation>
        <NavLink
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </NavLink>
        <NavLinks>
          <NavLink
            onClick={() => navigate('/projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => navigate('/resume')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </NavLink>
          {/* Blog 링크 제거 */}
        </NavLinks>
      </Navigation>

      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={<Projects onProjectClick={handleProjectClick} />}
          />
          <Route
            path="/projects/:id"
            element={
              <ProjectDetail
                projectId={selectedProject}
                onBack={handleBack}
              />
            }
          />
          <Route path="/resume" element={<Resume />} />
          {/* Blog 라우트 제거 */}
        </Routes>
      </MainContent>
    </AppContainer>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App; 