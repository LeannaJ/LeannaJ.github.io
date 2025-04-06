import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// 프로젝트 데이터를 컴포넌트 외부로 이동
const projectsData = {
  "1": {
    title: "Balancing Trailer Pool Network",
    description: "Collaborative analytics project optimizing trailer distribution strategy for logistics efficiency",
    image: "/images/logistics_van.jpg",
    tags: ["Data Science", "Logistics Strategy", "Python", "Optimization", "folium", "ortools", "Data Visualization"],
  
    overview: "Led a graduate-level consulting project addressing a key logistics challenge: how to balance trailer availability across a national network under fluctuating demand. Poor trailer positioning often results in high operational costs and low service levels—this project focused on solving that inefficiency using data-driven decision-making.",

    challenges: [
      "Understanding complex operational constraints across trailer locations and demand regions.",
      "Translating ambiguous real-world logistics needs into an actionable analytical framework.",
      "Ensuring data confidentiality while delivering impactful, interpretable results."
    ],

    solutions: [
      "Designed a scalable trailer distribution framework incorporating demand signals and location types.",
      "Collaborated with stakeholders to define business rules and capacity limits for trailer parking.",
      "Developed decision-support tools that simulate multiple allocation strategies under various demand scenarios."
    ],

    results: "Delivered a comprehensive recommendation and demo toolset, including an interactive map and dashboard using synthetic data. Presented findings at INFORMS conference, highlighting both strategic insights and practical implementation potential for logistics stakeholders.",
    
    deliverables: [
      "A poster presentation at INFORMS Analytics+ Conference 2025",
      "A demonstrative map and dashboard with synthetic data",
      "A comprehensive report detailing the analysis and recommendations.",
      "An interactive dashboard for visualizing the trailer allocation strategy.",
      "A presentation deck for stakeholders summarizing the findings and recommendations."
    ]
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
    
    results: "Our best model achieved a Root Mean Squared Error (RMSE) of 18.75 on validation data. The project successfully reduced training time, improved generalization performance, and demonstrated how pretrained CNNs can be leveraged for high-dimensional feature extraction when data is limited.",
  
    deliverables: [
      "Github repository with code and data",
      "A presentation deck for stakeholders summarizing the modeling process and the key findings."
    ]
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
    
    results: "Our final model was an XGBoost ensemble using hard voting and Optuna tuning, achieving an overall accuracy of 0.63085. We ranked 5th on Kaggle. The top features reflected a well-balanced contribution across geographical, team, and enrollment factors.",
  
    deliverables: [
      "A Kaggle notebook with the final model and analysis",
      "A interactive dashboard for visualizing the bracket prediction results",
      "A presentation deck for stakeholders summarizing the modeling process and the key findings."
    ]
  },
  "4": {
    title: "AI Agent of Automated Data Analysis(Ongoing)",
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
    
    results: "This project is currently in progress. Initial tests with Cursor demonstrate effective collaboration between human and AI across the analysis pipeline. Future plans include integrating LangChain agents for more complex reasoning tasks, expanding prompt templates for diverse data types, and building evaluation metrics to assess AI-supported workflows in real scenarios.",
  
    deliverables: [
      "Github repository with code and data",
      "Prompts for each step of the data analysis process",
      "A presentation deck for stakeholders summarizing the modeling process and the key findings."
    ]
  },
  "5": {
    title: "Data Dashboard for Business Analytics(Ongoing)",
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
    title: "Product Management Framework(Ongoing)",
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

const DeliverablesList = styled.div`
  margin-top: 2rem;
`;

const DeliverableItem = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background: #f5f5f5;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const DeliverableIcon = styled.span`
  font-size: 1.2rem;
`;

const ProjectDetail = ({ id, onBack }) => {
  console.log('Project ID:', id); // 디버깅용 로그 추가
  const project = projectsData[id.toString()];
  
  // 프로젝트별 실제 deliverables 정의
  const deliverables = {
    "1": [
      { type: 'pdf', label: 'INFORMS Poster', url: '/Files/Final Poster.pdf' },
      { type: 'html', label: 'Demo Map', url: '/Files/map_anonymized.html' }
    ],
    "2": [
      { type: 'github', label: 'GitHub Repository', url: 'https://github.com/LeannaJ/image_processing' }
    ],
    "4": [
      { type: 'github', label: 'GitHub Repository', url: 'https://github.com/LeannaJ/DA_Framework' },
      { type: 'pdf', label: 'Project Presentation', url: '/Files/1_Workflow_Slides.pdf' }
    ]
  };

  const getDeliverableIcon = (type) => {
    switch(type) {
      case 'github':
        return '📂';
      case 'pdf':
        return '📄';
      case 'html':
        return '🌐';
      default:
        return '📎';
    }
  };

  const handleDeliverableClick = (deliverable) => {
    if (deliverable.type === 'github') {
      window.open(deliverable.url, '_blank');
    } else if (deliverable.type === 'pdf' || deliverable.type === 'html') {
      window.open(deliverable.url, '_blank');
    }
  };

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

        {deliverables[id] && (
          <DeliverablesList>
            <SectionTitle>Deliverables</SectionTitle>
            <div>
              {deliverables[id].map((deliverable, index) => (
                <DeliverableItem
                  key={index}
                  onClick={() => handleDeliverableClick(deliverable)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DeliverableIcon>{getDeliverableIcon(deliverable.type)}</DeliverableIcon>
                  {deliverable.label}
                </DeliverableItem>
              ))}
            </div>
          </DeliverablesList>
        )}
      </ProjectContent>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail; 