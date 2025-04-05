import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// 프로젝트 데이터를 컴포넌트 외부로 이동
const projectsData = {
  "1": {
    title: "Balancing Trailer Pool Network",
    description: "Optimizing and visualizing trailer fleet allocation with Python and interactive web tools",
    image: "/images/logistics_van.jpg",
    tags: ["Python", "Streamlit", "folium", "Data Visualization", "Optimization"],
    
    overview: "This project addresses a common logistics challenge: how to efficiently allocate and relocate trailer assets across a national network in response to fluctuating demand. Poor allocation can lead to underutilized trailers in low-demand areas and shortages in high-demand regions—resulting in increased costs and reduced service levels.",
  
    challenges: [
      "Integrating multiple datasets including telematics data, demand signals (OTVI), and network locations.",
      "Designing a rule-based system to initially allocate trailers based on demand proximity (e.g., 25-mile radius).",
      "Optimizing trailer relocation using an integer programming model that minimizes total relocation distance."
    ],
  
    solutions: [
      "Forecasted trailer demand using normalized OTVI index and proportionally assigned demand to top cities.",
      "Developed a hierarchical allocation logic prioritizing dealer locations, then own locations, within set proximity.",
      "Implemented Mixed Integer Linear Programming (MILP) using OR-Tools to optimize trailer-to-location assignments under business constraints."
    ],
  
    results: "Developed a fully functional Python pipeline with an interactive Streamlit dashboard and Folium map. Delivered real-time visualization of trailer allocation and relocation strategies using synthetic data to ensure confidentiality. Enhanced usability with a QR code-enabled web demo featured at INFORMS."
  },
  "2": {
    title: "ML Model for Image Processing",
    description: "Image processing and object detection using CNN and transfer learning",
    image: "/images/image_processing_g_fix.jpg",
    tags: ["Python", "CNN", "Keras", "TensorFlow", "Transfer Learning", "Image Processing", "Object Detection"],
    
    overview: "This project aimed to predict the popularity of pet profile images (Pawpularity Score) based on 9,912 images and structured metadata provided in a CSV file. To accomplish this, we conducted image preprocessing, extracted visual features using a pretrained CNN (ResNet-50), and integrated those with binary metadata features (e.g., focus, blur, accessories) to build a robust regression model.",
    
    challenges: [
      "Initial attempts using CNN-only or Regression-only models failed to capture non-linear relationships between image aesthetics and popularity score.",
      "High computational cost and overfitting risks due to training CNN from scratch on a relatively small dataset.",
      "Lack of interpretability in deep learning models made it difficult to understand which features impacted the target score."
    ],
    
    solutions: [
      "Developed a hybrid model by combining image features extracted from a pretrained ResNet-50 with tabular metadata, improving both accuracy and interpretability.",
      "Explored multiple modeling approaches, including pure CNN, Transformer, and finally converged on a pretrained CNN + XGBoost structure after multiple rounds of experimentation and tuning.",
      "Applied image normalization, resizing, and tensor conversion for CNN input, then merged CNN feature vectors with metadata to train a non-linear regression model with XGBoost."
    ],
    
    results: "Our best model achieved a Root Mean Squared Error (RMSE) of 18.75 on validation data. The project successfully reduced training time, improved generalization performance, and demonstrated how pretrained CNNs can be leveraged for high-dimensional feature extraction when data is limited."
  },
  "3": {
    title: "ML Model for Prediction with Sports Data",
    description: "Predictive modeling for bracket prediction in NCAA March Madness",
    image: "/images/sports_bracket.jpg",
    tags: ["Python", "Tableau", "XGBoost", "Ensemble", "Prediction", "Data Visualization"],
    
    overview: "This project aimed to predict the NCAA semifinal and champion winners based on user-submitted brackets and to analyze whether school affiliation influences bracket decisions. We leveraged machine learning models and data visualization to uncover meaningful patterns behind user predictions.",
    
    challenges: [
      "Understanding complex interactions among a large number of variables, including geographical, team performance, and institutional factors.",
      "Designing a modeling guide to strategically select and engineer features while reducing noise.",
      "Achieving marginal improvements in accuracy through continuous tuning, experimentation, and evaluation."
    ],
    
    solutions: [
      "Categorized variables into three main groups: geography, team performance, and institution scale, and applied gradient boosting models to analyze feature importance.",
      "Engineered additional features such as DMA code matching and interaction terms based on exploratory data analysis with Tableau.",
      "Tried various ensemble structures including soft/hard voting and stacking. Used both Randomized Search and Bayesian optimization with Optuna for robust hyperparameter tuning."
    ],
    
    results: "Our final model was an XGBoost ensemble using hard voting and Optuna tuning, achieving an overall accuracy of 0.63085. We ranked 5th on Kaggle. The top features reflected a well-balanced contribution across geographical, team, and enrollment factors."
  },
  "4": {
    title: "AI Agent of Automated Data Analysis",
    description: "Data analysis automation with LLM and RAG",
    image: "/images/AI_fix.jpg",
    tags: ["Cursor", "Python", "Langchain", "LLM", "RAG", "Hugging Face"],
    
    overview: "This project aims to augment the end-to-end workflow of a data analyst using AI and prompt engineering. Leveraging Cursor's AI agent capabilities, we designed a modular, prompt-driven framework that separates rule-based tasks from human judgment, enabling an efficient and human-centered approach to data analysis.",
    
    challenges: [
      "How to clearly separate tasks that should be automated vs. those that require human decision-making.",
      "Making prompts flexible and extensible to adapt to different datasets and analysis contexts.",
      "Designing prompt chaining logic that guides AI through each analysis step while waiting for human feedback where necessary."
    ],
    
    solutions: [
      "Created a visual workflow chart that maps out each step of the data analysis process and labels tasks as either rule-based or human-judgment-based.",
      "Designed step-by-step prompts for data loading, cleaning, exploration, modeling, and reporting—structured around prompt chaining.",
      "Enabled human-in-the-loop interaction via chat for decisions like feature selection, transformation, and interpreting correlation results."
    ],
    
    results: "This project is currently in progress. Initial tests with Cursor demonstrate effective collaboration between human and AI across the analysis pipeline. Future plans include integrating LangChain agents for more complex reasoning tasks, expanding prompt templates for diverse data types, and building evaluation metrics to assess AI-supported workflows in real scenarios."
  },
  "5": {
    title: "Data Dashboard for Business Analytics",
    description: "Interactive dashboard for business analytics using Python and React",
    image: "/images/Dashboard1_fix.jpg",
    tags: ["Python", "React", "Data Visualization", "Streamlit", "Tableau", "SQL"],
    
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
  "6": {
    title: "Product Management Framework",
    description: "Product design and strategic work for a mobile application",
    image: "/images/App_UX_1_fix.jpg",
    tags: ["Figma", "Framer", "UX", "UI", "Wireframing", "Prototyping", "User Research", "Agile", "Jira"],
    
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