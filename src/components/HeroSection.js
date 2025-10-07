import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #FAF7F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const NameSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
  margin-top: 3rem;
`;

const Name = styled(motion.h1)`
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  color: #333333;
  margin: 0;
  letter-spacing: 0.7em;
  line-height: 0.8;
  text-transform: uppercase;
  
  .highlight-bg {
    background: #FF4126;
    color: #ffffff;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
    letter-spacing: 0.1em;
  }
  
  @media (max-width: 480px) {
    font-size: 3rem;
    letter-spacing: 0.08em;
  }
`;

const Subtitle = styled(motion.p)`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  font-weight: 200;
  color: #555555;
  margin-top: 2rem;
  text-align: center;
  letter-spacing: 0.1em;
  
  .highlight {
    color: #FF4126;
    font-weight: 500;
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const VennDiagram = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: nowrap;
  margin-top: 6rem;
  margin-bottom: 0rem;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: -2rem;
  }
`;

const LinksBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 12rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const IconButton = styled.a`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  background: transparent;
  
  &:hover {
    border-color: #FF4126;
    color: #FF4126;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid #FF4126;
  border-radius: 30px;
  text-decoration: none;
  color: #FF4126;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: transparent;
  
  &:hover {
    background: #FF4126;
    color: #FAF7F2;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.3rem;
  }
`;


const PlusSign = styled(motion.div)`
  font-family: 'Montserrat', sans-serif;
  font-size: 5rem;
  font-weight: 500;
  color: #FF4126;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Circle = styled(motion.div)`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333333;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  text-decoration: none;
  
  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
    font-size: 0.9rem;
  }
`;

const AICircle = styled(Circle)`
  background: #B6C93E;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 0 20px rgba(143, 155, 61, 0.7);
    transform: translateY(-2px);
  }
`;

const DataCircle = styled(Circle)`
  background: #FF4126;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 0 20px rgba(207, 80, 64, 0.7);
    transform: translateY(-2px);
  }
`;

const ProductCircle = styled(Circle)`
  background: #D3ECF7;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 0 20px rgba(155, 172, 180, 0.7);
    transform: translateY(-2px);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <NameSection>
        <Name>
          LEANNA JEON
        </Name>
        <Subtitle>
          AI/ML Engineering and Data Science Specialist with a Product Mindset
        </Subtitle>
      </NameSection>
      
      <VennDiagram>
        <AICircle as="a" href="https://leannajeon.vercel.app" target="_blank" rel="noopener noreferrer">
          AI/ML
        </AICircle>
        
        <PlusSign>
          +
        </PlusSign>
        
        <DataCircle as="a" href="https://your-data-page.vercel.app" target="_blank" rel="noopener noreferrer">
          Data
        </DataCircle>
        
        <PlusSign>
          +
        </PlusSign>
        
        <ProductCircle as="a" href="https://your-product-page.vercel.app" target="_blank" rel="noopener noreferrer">
          Product
        </ProductCircle>
      </VennDiagram>
      
      <LinksBox>
        <IconButton href="mailto:leannajeon13@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </IconButton>

        <IconButton href="https://linkedin.com/in/leannajeon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </IconButton>
        
        <IconButton href="https://github.com/LeannaJ" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </IconButton>
        
        <ResumeButton href="/Leanna_Seungmi_Jeon_Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </ResumeButton>
      </LinksBox>
    </HeroContainer>
  );
};

export default HeroSection;
