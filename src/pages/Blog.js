import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const PageTitle = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
`;

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogCategory = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  font-size: 0.875rem;
`;

const ReadMore = styled(motion.button)`
  background: none;
  border: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font-size: 0.875rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Data Visualization in Business Decision Making",
      excerpt: "Learn how effective data visualization can transform raw data into actionable insights for business growth.",
      category: "Data Analysis",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 2,
      title: "Best Practices for Agile Project Management",
      excerpt: "Discover the key principles and practices that make agile project management successful in modern organizations.",
      category: "Project Management",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 3,
      title: "User-Centered Design: A Comprehensive Guide",
      excerpt: "Explore the fundamentals of user-centered design and how it can improve your product development process.",
      category: "UX Design",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x200"
    }
  ];

  return (
    <BlogContainer>
      <PageTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </PageTitle>

      <BlogGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BlogImage style={{ backgroundImage: `url(${post.image})` }} />
            <BlogContent>
              <BlogCategory>{post.category}</BlogCategory>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <BlogMeta>
                <span>{post.date} • {post.readTime}</span>
                <ReadMore
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Read More →
                </ReadMore>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog; 