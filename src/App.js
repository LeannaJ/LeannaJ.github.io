import React from 'react';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';

const AppContainer = styled.div`
  height: 100vh;
  background: #FAF7F2;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <HeroSection />
    </AppContainer>
  );
}

export default App; 