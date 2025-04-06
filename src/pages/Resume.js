import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
`;

const DownloadButton = styled(motion.a)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  background: #333;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  z-index: 100;
  
  &:hover {
    background: #444;
  }
`;

const BottomDownloadButton = styled(motion.a)`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  background: #333;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  z-index: 100;
  
  &:hover {
    background: #444;
  }
`;

const DownloadIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
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

  a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: #333;
      text-decoration: underline;
    }
  }
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <DownloadButton
        href="/Leanna_Seungmi_Jeon_Resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <DownloadIcon viewBox="0 0 24 24">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </DownloadIcon>
        Download Resume
      </DownloadButton>

      <BottomDownloadButton
        href="/Leanna_Seungmi_Jeon_Resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <DownloadIcon viewBox="0 0 24 24">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </DownloadIcon>
        Download Resume
      </BottomDownloadButton>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceItem>
          <ExperienceTitle>Graduate Student Data Analyst</ExperienceTitle>
          <ExperienceCompany>US Logistics Company</ExperienceCompany>
          <ExperienceDate>Jan 2025 - Apr 2025</ExperienceDate>
          <ExperienceDescription>
            <li>Contributed to a 4-month client-facing analytics project, helping design a data-driven decision support framework for fleet distribution across U.S. cities</li>
            <li>Designed interactive geospatial dashboards that helped visualize trailer distribution strategies and communicate logistics constraints to non-technical stakeholders</li>
            <li>Collaborated with a cross-functional team to deliver optimization-based recommendations that improved alignment between demand signals and operational planning</li>
          </ExperienceDescription>
        </ExperienceItem>
        
        <ExperienceItem>
          <ExperienceTitle>User Experience Strategist Freelancer</ExperienceTitle>
          <ExperienceCompany>WHITEBREW: Korean Digital Agency</ExperienceCompany>
          <ExperienceDate>Nov 2022 - Jun 2023</ExperienceDate>
          <ExperienceDescription>
            <li>Strategized mobile gaming product, overseeing entire product lifecycle from concept to launch, identifying competitive features to release new products with a differentiated MVP and to augment user engagement</li>
            <li>Obtained prospective users in e-book translation service by performing A/B testing wirh landing pages, resulting in 30% boost in reducing product development process</li>
          </ExperienceDescription>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceTitle>Product Management Intern</ExperienceTitle>
          <ExperienceCompany>Naver Cloud (WORKSMOBILE)</ExperienceCompany>
          <ExperienceDate>Dec 2022 - Feb 2023</ExperienceDate>
          <ExperienceDescription>
            <li>Conducted user research with 10 participants employing qualitative interview skills to inquire behavior context with chat service, uncovering key pain points in 'Home' feature; designed a card-based dashboard UX followed by A/B testing</li>
            <li>Formulated information structure for 'My Own Chat Room' feature through leading user journey analysis, providing personalized data storage services to over 10,000 users in Asia, improving user retention</li>
          </ExperienceDescription>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceTitle>Business Analytics & Product Management Intern</ExperienceTitle>
          <ExperienceCompany>LG Uplus</ExperienceCompany>
          <ExperienceDate>May 2022 - Dec 2022</ExperienceDate>
          <ExperienceDescription>
            <li>Spearheaded elevation of service usage for over 1 million users by engineering time-series data, visualizing customer behavior trends, and providing insights for pricing and marketing strategies with Python and SQL</li>
            <li>Drove user engagement by 100% and revenue by 1.5%, analyzing marketing funnel data at each stage, executing segment analysis based on consumers' behavior and creating two digital contents with 30,000 views</li>
            <li>Overhauled information architecture and navigation menus on web and mobile platforms, increasing digital channel usuage by 20%, and service sign-ups by 10%, while reducing negative customer feedback by 20%</li>
          </ExperienceDescription>
        </ExperienceItem>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle>Education</SectionTitle>
        <ExperienceItem>
          <ExperienceTitle>Master in Science in Business Analytics & Information Technology</ExperienceTitle>
          <ExperienceCompany>Purdue University</ExperienceCompany>
          <ExperienceDate>2024 Aug - 2025 Aug</ExperienceDate>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceTitle>Bachelor in Business Administration</ExperienceTitle>
          <ExperienceCompany>Sogang University</ExperienceCompany>
          <ExperienceDate>2015 - 2022</ExperienceDate>
        </ExperienceItem>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <h4>Data Analysis</h4>
            <ul>
              <li>Python | SQL</li>
              <li>Tableau | AWS | Azure</li>
              <li>Data Visualization</li>
              <li>Statistical Analysis</li>
              <li>Machine Learning</li>
            </ul>
          </SkillCategory>
          
          <SkillCategory>
            <h4>Project Management</h4>
            <ul>
              <li>Agile</li>
              <li>Scrum with Jira</li>
              <li>Project Planning</li>
              <li>Team Leadership</li>
            </ul>
          </SkillCategory>
          
          <SkillCategory>
            <h4>Product Design</h4>
            <ul>
              <li>Figma  |  Framer AI</li>
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Quality Assurance</li>
            </ul>
          </SkillCategory>
        </SkillsGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SectionTitle>Contact</SectionTitle>
        <ContactInfo>
          <p>📧 jeon139@purdue.edu</p>
          <p>📱 (765) 426-2966</p>
          <p>📍 West Lafayette, IN</p>
          <a href="https://www.linkedin.com/in/leannajeon" target="_blank" rel="noopener noreferrer">
            🔗 www.linkedin.com/in/leannajeon
          </a>
        </ContactInfo>
      </Section>
    </ResumeContainer>
  );
};

export default Resume; 