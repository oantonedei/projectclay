import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBookOpen, FiDownload, FiSearch, FiCalendar, FiUser, FiTag } from 'react-icons/fi';

const BlogContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.cream} 0%, ${props => props.theme.colors.white} 100%);
  padding: ${props => props.theme.spacing['4xl']} 0;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const HeroSubtitle = styled(motion.p)`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.lg};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const BlogContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: ${props => props.theme.spacing['2xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.spacing['2xl']};
`;

const BlogCard = styled(motion.article)`
  background: ${props => props.theme.colors.cream};
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  background: ${props => props.backgroundImage ? `url(${props.backgroundImage}) center/cover` : 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(139, 92, 246, 0.3);
    border-radius: ${props => props.theme.borderRadius.lg};
  }
`;

const BlogContentInner = styled.div`
  padding: ${props => props.theme.spacing.xl};
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
  
  span {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xs};
  }
`;

const BlogTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.xl};
`;

const BlogExcerpt = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

const BlogTags = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  span {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    border-radius: ${props => props.theme.borderRadius.full};
    font-size: ${props => props.theme.fontSizes.xs};
  }
`;

const ReadMoreButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const Sidebar = styled.aside`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: -1;
  }
`;

const SearchBox = styled.div`
  background: ${props => props.theme.colors.cream};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  .search-input {
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.borderRadius.md};
    padding: ${props => props.theme.spacing.sm};
    
    input {
      flex: 1;
      border: none;
      outline: none;
      padding: ${props => props.theme.spacing.sm};
      font-size: ${props => props.theme.fontSizes.base};
    }
    
    svg {
      color: ${props => props.theme.colors.textLight};
      margin-right: ${props => props.theme.spacing.sm};
    }
  }
`;

const CategoryBox = styled.div`
  background: ${props => props.theme.colors.cream};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  h4 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: ${props => props.theme.spacing.md};
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: ${props => props.theme.spacing.sm};
      
      a {
        color: ${props => props.theme.colors.textLight};
        text-decoration: none;
        transition: color ${props => props.theme.transitions.fast};
        
        &:hover {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`;

const ResourcesSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.cream};
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const ResourceCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const ResourceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};
`;

const ResourceTitle = styled.h4`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ResourceDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

const DownloadButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Finding Peace in the Storm: Managing Anxiety Through Faith',
      excerpt: 'Discover practical strategies for managing anxiety while strengthening your spiritual foundation. Learn how faith and professional techniques work together for lasting peace.',
      author: 'Dr. Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Mental Health',
      tags: ['Anxiety', 'Faith', 'Peace', 'Wellness'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80'
    },
    {
      id: 2,
      title: 'Building Stronger Marriages: Communication Tips for Couples',
      excerpt: 'Explore effective communication strategies that can transform your marriage. Learn how to listen, express needs, and grow together in love and understanding.',
      author: 'Maria Rodriguez',
      date: 'March 10, 2024',
      category: 'Relationships',
      tags: ['Marriage', 'Communication', 'Love', 'Growth'],
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      title: 'Parenting with Purpose: Raising Children in Faith',
      excerpt: 'Navigate the challenges of modern parenting while instilling strong values and faith in your children. Practical advice for raising confident, compassionate kids.',
      author: 'Jennifer Williams',
      date: 'March 5, 2024',
      category: 'Family',
      tags: ['Parenting', 'Faith', 'Children', 'Values'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
    },
    {
      id: 4,
      title: 'Discovering Your God-Given Purpose',
      excerpt: 'Unlock your unique gifts and talents to find your calling. Learn how to align your life with God\'s plan and make a meaningful impact in the world.',
      author: 'Dr. Sarah Johnson',
      date: 'February 28, 2024',
      category: 'Personal Growth',
      tags: ['Purpose', 'Calling', 'Gifts', 'Impact'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const resources = [
    {
      icon: <FiBookOpen />,
      title: 'Daily Devotional Guide',
      description: 'A 30-day devotional guide to strengthen your faith and deepen your relationship with God.',
      downloadUrl: '#'
    },
    {
      icon: <FiDownload />,
      title: 'Marriage Enrichment Workbook',
      description: 'Practical exercises and activities to strengthen your marriage and improve communication.',
      downloadUrl: '#'
    },
    {
      icon: <FiBookOpen />,
      title: 'Parenting Principles PDF',
      description: 'Biblical principles and practical tips for raising children in today\'s world.',
      downloadUrl: '#'
    }
  ];

  const categories = [
    'Marriage',
    'Parenting',
    'Identity',
    'Faith',
    'Healing',
    'Mental Health'
  ];

  const handleDownload = (url) => {
    // Handle resource download
    console.log('Downloading:', url);
  };

  return (
    <BlogContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Blog & Resources
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover devotionals, practical teachings, and free resources to support your journey of faith, healing, and personal growth.
          </HeroSubtitle>
        </div>
      </HeroSection>

      <BlogSection>
        <div className="container">
          <BlogContent>
            <BlogGrid>
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BlogImage backgroundImage={post.image} />
                  <BlogContentInner>
                    <BlogMeta>
                      <span><FiCalendar /> {new Date(post.date).toLocaleDateString()}</span>
                      <span><FiUser /> {post.author}</span>
                      <span><FiTag /> {post.category}</span>
                    </BlogMeta>
                    <BlogTitle>{post.title}</BlogTitle>
                    <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                    <BlogTags>
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                    </BlogTags>
                    <ReadMoreButton>Read More</ReadMoreButton>
                  </BlogContentInner>
                </BlogCard>
              ))}
            </BlogGrid>

            <Sidebar>
              <SearchBox>
                <div className="search-input">
                  <FiSearch />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </SearchBox>

              <CategoryBox>
                <h4>Categories</h4>
                <ul>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href={`#${category.toLowerCase()}`}>{category}</a>
                    </li>
                  ))}
                </ul>
              </CategoryBox>
            </Sidebar>
          </BlogContent>
        </div>
      </BlogSection>

      <ResourcesSection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Free Resources
          </SectionTitle>
          <ResourcesGrid>
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <ResourceIcon>{resource.icon}</ResourceIcon>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
                <DownloadButton onClick={() => handleDownload(resource.downloadUrl)}>
                  <FiDownload />
                  Download Free
                </DownloadButton>
              </ResourceCard>
            ))}
          </ResourcesGrid>
        </div>
      </ResourcesSection>
    </BlogContainer>
  );
};

export default Blog; 