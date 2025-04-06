import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';

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
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BlogCard = styled(motion.article)`
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

const BlogDate = styled.span`
  font-size: 0.875rem;
`;

const BlogAuthor = styled.span`
  font-size: 0.875rem;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 0.9rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  padding: 0;
  margin-top: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: #007bff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: ${props => props.disabled ? 'none' : 'scaleX(1)'};
    transform-origin: left;
  }
`;

const Blog = ({ onBlogPostClick }) => {
  const posts = Object.entries(blogData).map(([id, post]) => ({
    id,
    ...post
  }));

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
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            disabled={post.id === 3}
            onClick={() => !post.disabled && onBlogPostClick(post.id)}
            whileHover={{ scale: post.id === 3 ? 1 : 1.02 }}
            whileTap={{ scale: post.id === 3 ? 1 : 0.98 }}
          >
            <BlogImage style={{ backgroundImage: `url(${post.image})` }} />
            <BlogContent>
              <BlogMeta>
                <BlogDate>{post.date}</BlogDate>
                <BlogAuthor>{post.author}</BlogAuthor>
              </BlogMeta>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.summary}</BlogExcerpt>
              <ReadMoreButton disabled={post.id === 3}>
                Read More
              </ReadMoreButton>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog; 