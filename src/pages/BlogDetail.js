import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';

const BlogDetailContainer = styled.div`
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

const BlogHeader = styled.div`
  margin-bottom: 2rem;
`;

const BlogTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const BlogMeta = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const BlogImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const BlogContent = styled.div`
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  line-height: 1.8;
  color: #333;
  
  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: #333;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  color: #666;
`;

const BlogDetail = ({ id, onBack }) => {
  const post = blogData[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <BlogDetailContainer>
      <BackButton
        onClick={onBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Blog
      </BackButton>

      <BlogHeader>
        <BlogTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </BlogTitle>
        <BlogMeta>
          {post.date} • {post.author}
        </BlogMeta>
        <BlogImage style={{ backgroundImage: `url(${post.image})` }} />
      </BlogHeader>

      <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />

      <TagsContainer>
        {post.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
    </BlogDetailContainer>
  );
};

export default BlogDetail; 