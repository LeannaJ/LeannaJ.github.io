import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const HeroSection = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #777;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SkillsSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled(motion.div)`
  background: #FFFECF;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  color: #666;
  margin-bottom: 0.5rem;
`;

const Home = ({ onNavigateToProjects, onNavigateToProjectDetail }) => {
  const handleCardClick = (cardType) => {
    switch(cardType) {
      case 'ai':
        onNavigateToProjects();
        break;
      case 'product':
        onNavigateToProjectDetail(6);
        break;
      default:
        break;
    }
  };

  return (
    <HomeContainer>
      <HeroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Leanna Jeon</Title>
        <Subtitle>Problem Solver with Data and AI</Subtitle>
        <Description>
          A quick learner with a proven ability to rapidly acquire new skills and deliver results
          by understanding complex data, leveraging it to drive strategic decisions, and
          proactively managing large datasets across various roles and industries.
        </Description>
      </HeroSection>

      <SkillsSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <SkillCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleCardClick('ai')}
        >
          <SkillTitle>AI & Data Projects</SkillTitle>
          <SkillList>
            <SkillItem>Data Visualization</SkillItem>
            <SkillItem>Predictive Modeling</SkillItem>
            <SkillItem>Optimization & Simulation</SkillItem>
            <SkillItem>Machine/Deep Learning</SkillItem>
            <SkillItem>Image Processing</SkillItem>
            <SkillItem>AI agent with LLM & RAG</SkillItem>
          </SkillList>
        </SkillCard>

        <SkillCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleCardClick('product')}
        >
          <SkillTitle>Product Management Frameworks</SkillTitle>
          <SkillList>
            <SkillItem>Product Design</SkillItem>
            <SkillItem>Product User Research</SkillItem>
            <SkillItem>Agile Methodologies</SkillItem>
            <SkillItem>Scrum with Jira</SkillItem>
            <SkillItem>Project Planning</SkillItem>
          </SkillList>
        </SkillCard>
      </SkillsSection>
    </HomeContainer>
  );
};

export default Home; 