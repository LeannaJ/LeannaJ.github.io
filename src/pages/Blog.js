import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';

const BlogContainer = styled.div`
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

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BlogCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
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

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const BlogMeta = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const BlogSummary = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  color: #666;
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
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => onBlogPostClick(post.id)}
          >
            <BlogImage style={{ backgroundImage: `url(${post.image})` }} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogMeta>{post.date} • {post.author}</BlogMeta>
              <BlogSummary>{post.summary}</BlogSummary>
              <TagsContainer>
                {post.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagsContainer>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog; 