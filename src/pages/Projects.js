import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const PageTitle = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.article)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  
  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-5px)'};
    box-shadow: ${props => props.disabled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 6px 12px rgba(0, 0, 0, 0.15)'};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  color: #666;
`;

const ProjectExcerpt = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #666;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.disabled ? '#ccc' : '#333'};
  font: inherit;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  outline: inherit;
  padding: 0;
  margin: 0;
`;

const Projects = ({ onProjectClick }) => {
  const projects = [
    {
      id: 1,
      title: "Balancing Trailer Pool Network",
      description: "Interactive dashboard for business analytics using Python and React",
      image: "/images/logistics_van.jpg",
      tags: ["Python", "Logistics Strategy", "Optimization", "folium", "ortools", "Visualization"],
      github: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "ML Model for Image Processing",
      description: "Image processing and object detection using CNN and transfer learning",
      image: "/images/image_processing_g_fix.jpg",
      tags: ["Python", "Image Processing", "CNN", "Keras", "TensorFlow", "Transfer Learning"],
      github: "https://github.com/yourusername/project3"
    },
    {
      id: 3,
      title: "ML Model for Prediction with Sports Data",
      description: "Predictive modeling for bracket prediction in NCAA March Madness",
      image: "/images/sports_bracket.jpg",
      tags: ["Python", "Sports Analytics", "Prediction", "Tableau", "Visualization"],
    },
    {
      id: 4,
      title: "AI Agent of Automated Data Analysis(Ongoing)",
      description: "Data analysis automation with LLM and RAG",
      image: "/images/AI_fix.jpg",
      tags: ["AI", "LLM", "RAG", "Cursor", "Python", "LangChain", "LangSmith", "Hugging Face"],
      github: "https://github.com/yourusername/project2"
    },
    {
      id: 5,
      title: "Data Dashboard for Business Analytics(Ongoing)",
      description: "Interactive dashboard for business analytics using Python and React",
      image: "/images/Dashboard1_fix.jpg",
      tags: ["Python", "React", "Visualization", "Dashboard", "Streamlit", "Tableau", "SQL"],
      github: "https://github.com/yourusername/project1"
    },
    {
      id: 6,
      title: "Product Management Framework(Ongoing)",
      description: "Product design and strategic work for a mobile application",
      image: "/images/App_UX_1_fix.jpg",
      tags: ["Figma", "Framer", "UX", "UI", "Wireframing", "Prototyping", "User Research"],
    }
  ];

  const handleProjectClick = (project) => {
    if (project.id === 5) {
      return;
    }
    onProjectClick(project.id);
  };

  return (
    <ProjectsContainer>
      <PageTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </PageTitle>

      <ProjectsGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            whileHover={project.id !== 5 ? { scale: 1.03 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => handleProjectClick(project)}
            disabled={project.id === 5}
          >
            <ProjectImage style={{ backgroundImage: `url(${project.image})` }} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ProjectExcerpt>{project.excerpt}</ProjectExcerpt>
              <ProjectMeta>
                <span>{project.date} • {project.role}</span>
                <ReadMoreButton disabled={project.id === 5}>
                  Read More →
                </ReadMoreButton>
              </ProjectMeta>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects; 