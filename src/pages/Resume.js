import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Section = styled(motion.section)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.4rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.h4`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.p`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.ul`
  list-style-type: none;
  padding-left: 0;
  
  li {
    color: #666;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #333;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillCategory = styled.div`
  h4 {
    color: #444;
    margin-bottom: 0.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      color: #666;
      margin-bottom: 0.25rem;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  p {
    color: #666;
    margin: 0;
  }
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Experience</SectionTitle>
        <ExperienceItem>
          <ExperienceTitle>Senior Data Analyst</ExperienceTitle>
          <ExperienceCompany>Tech Company</ExperienceCompany>
          <ExperienceDate>2020 - Present</ExperienceDate>
          <ExperienceDescription>
            <li>Led data analysis initiatives for product development</li>
            <li>Developed automated reporting systems using Python</li>
            <li>Collaborated with cross-functional teams to implement data-driven solutions</li>
          </ExperienceDescription>
        </ExperienceItem>
        
        <ExperienceItem>
          <ExperienceTitle>Project Manager</ExperienceTitle>
          <ExperienceCompany>Digital Agency</ExperienceCompany>
          <ExperienceDate>2018 - 2020</ExperienceDate>
          <ExperienceDescription>
            <li>Managed multiple client projects simultaneously</li>
            <li>Implemented agile methodologies for improved project delivery</li>
            <li>Led team of 5 developers and designers</li>
          </ExperienceDescription>
        </ExperienceItem>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <h4>Data Analysis</h4>
            <ul>
              <li>Python</li>
              <li>SQL</li>
              <li>Data Visualization</li>
              <li>Statistical Analysis</li>
            </ul>
          </SkillCategory>
          
          <SkillCategory>
            <h4>Project Management</h4>
            <ul>
              <li>Agile</li>
              <li>Scrum</li>
              <li>Risk Management</li>
              <li>Team Leadership</li>
            </ul>
          </SkillCategory>
          
          <SkillCategory>
            <h4>UX Design</h4>
            <ul>
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
            </ul>
          </SkillCategory>
        </SkillsGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionTitle>Contact</SectionTitle>
        <ContactInfo>
          <p>📧 email@example.com</p>
          <p>📱 +1 (123) 456-7890</p>
          <p>📍 City, Country</p>
          <p>🔗 linkedin.com/in/yourprofile</p>
        </ContactInfo>
      </Section>
    </ResumeContainer>
  );
};

export default Resume; 