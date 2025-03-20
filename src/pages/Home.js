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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const SkillCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Leanna Jeon</Title>
        <Subtitle>Data Analyst & Project Manager</Subtitle>
        <Description>
          Passionate about transforming data into actionable insights and leading projects
          that make a difference. With a background in UX design and data analysis,
          I bring a unique perspective to every project I undertake.
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
        >
          <SkillTitle>Data Analysis</SkillTitle>
          <SkillList>
            <SkillItem>Data Visualization</SkillItem>
            <SkillItem>Statistical Analysis</SkillItem>
            <SkillItem>SQL & Python</SkillItem>
          </SkillList>
        </SkillCard>

        <SkillCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <SkillTitle>Project Management</SkillTitle>
          <SkillList>
            <SkillItem>Agile Methodologies</SkillItem>
            <SkillItem>Team Leadership</SkillItem>
            <SkillItem>Risk Management</SkillItem>
          </SkillList>
        </SkillCard>

        <SkillCard
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <SkillTitle>UX Design</SkillTitle>
          <SkillList>
            <SkillItem>User Research</SkillItem>
            <SkillItem>Wireframing</SkillItem>
            <SkillItem>Prototyping</SkillItem>
          </SkillList>
        </SkillCard>
      </SkillsSection>
    </HomeContainer>
  );
};

export default Home; 