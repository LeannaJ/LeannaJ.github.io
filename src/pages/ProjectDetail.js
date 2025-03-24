import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// 프로젝트 데이터를 컴포넌트 외부로 이동
const projectsData = {
  1: {
    title: "Project 1",
    description: "This is project 1's main description.",
    image: "https://via.placeholder.com/400x200",
    tags: ["React", "Node.js", "MongoDB"],
    overview: "Detailed overview of project 1...",
    challenges: [
      "Challenge 1 description",
      "Challenge 2 description",
      "Challenge 3 description"
    ],
    solutions: [
      "Solution 1 description",
      "Solution 2 description",
      "Solution 3 description"
    ],
    results: "The results and impact of project 1..."
  },
  2: {
    title: "Project 2",
    description: "This is project 2's main description.",
    image: "https://via.placeholder.com/400x200",
    tags: ["Python", "Data Analysis", "Machine Learning"],
    overview: "Detailed overview of project 2...",
    challenges: [
      "Challenge 1 description",
      "Challenge 2 description",
      "Challenge 3 description"
    ],
    solutions: [
      "Solution 1 description",
      "Solution 2 description",
      "Solution 3 description"
    ],
    results: "The results and impact of project 2..."
  },
  3: {
    title: "Project 3",
    description: "This is project 3's main description.",
    image: "https://via.placeholder.com/400x200",
    tags: ["UX Research", "Prototyping", "User Testing"],
    overview: "Detailed overview of project 3...",
    challenges: [
      "Challenge 1 description",
      "Challenge 2 description",
      "Challenge 3 description"
    ],
    solutions: [
      "Solution 1 description",
      "Solution 2 description",
      "Solution 3 description"
    ],
    results: "The results and impact of project 3..."
  },
  4: {
    title: "Project 4",
    description: "This is project 4's main description.",
    image: "https://via.placeholder.com/400x200",
    tags: ["React Native", "Mobile Development", "API Integration"],
    overview: "Detailed overview of project 4...",
    challenges: [
      "Challenge 1 description",
      "Challenge 2 description",
      "Challenge 3 description"
    ],
    solutions: [
      "Solution 1 description",
      "Solution 2 description",
      "Solution 3 description"
    ],
    results: "The results and impact of project 4..."
  },
  5: {
    title: "Project 5",
    description: "This is project 5's main description.",
    image: "https://via.placeholder.com/400x200",
    tags: ["AWS", "Cloud Architecture", "DevOps"],
    overview: "Detailed overview of project 5...",
    challenges: [
      "Challenge 1 description",
      "Challenge 2 description",
      "Challenge 3 description"
    ],
    solutions: [
      "Solution 1 description",
      "Solution 2 description",
      "Solution 3 description"
    ],
    results: "The results and impact of project 5..."
  },
  6: {
    title: "Project 6",
    description: "This is project 6's main description.",
    image: "https://via.placeholder.com/400x200",
    tags: ["AI", "Deep Learning", "Computer Vision"],
    overview: "Detailed overview of project 6...",
    challenges: [
      "Challenge 1 description",
      "Challenge 2 description",
      "Challenge 3 description"
    ],
    solutions: [
      "Solution 1 description",
      "Solution 2 description",
      "Solution 3 description"
    ],
    results: "The results and impact of project 6..."
  }
};

const ProjectDetailContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const BackButton = styled(motion.button)`
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 1rem;
  
  &:hover {
    background: #444;
  }
`;

const ProjectTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ProjectContent = styled.div`
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const ProjectDescription = styled.div`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ProjectSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  color: #666;
`;

const ProjectDetail = ({ id, onBack }) => {
  const project = projectsData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetailContainer>
      <BackButton
        onClick={onBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </BackButton>

      <ProjectTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </ProjectTitle>

      <ProjectContent>
        <ProjectImage style={{ backgroundImage: `url(${project.image})` }} />
        
        <ProjectTags>
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </ProjectTags>

        <ProjectSection>
          <SectionTitle>Overview</SectionTitle>
          <ProjectDescription>{project.overview}</ProjectDescription>
        </ProjectSection>

        <ProjectSection>
          <SectionTitle>Challenges</SectionTitle>
          <ProjectDescription>
            <ul>
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </ProjectDescription>
        </ProjectSection>

        <ProjectSection>
          <SectionTitle>Solutions</SectionTitle>
          <ProjectDescription>
            <ul>
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </ProjectDescription>
        </ProjectSection>

        <ProjectSection>
          <SectionTitle>Results</SectionTitle>
          <ProjectDescription>{project.results}</ProjectDescription>
        </ProjectSection>
      </ProjectContent>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail; 