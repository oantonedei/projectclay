import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FiHeart, FiTarget, FiEye, FiAward, FiUsers, FiBookOpen, FiShield, FiStar, FiGift } from 'react-icons/fi';

const AboutContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  background: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
    text-align: center;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const HeroText = styled.div`
  position: relative;
  z-index: 4;
`;

const HeroImageContainer = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    height: 550px;
    order: -1;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 500px;
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
  
  /* Resonance Effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(167, 139, 250, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  /* Resonance Pulse Animation */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    animation: resonance-pulse 3s ease-in-out infinite;
    pointer-events: none;
    z-index: 2;
  }
  
  @keyframes resonance-pulse {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
      background: url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80') center/cover;
  z-index: 0;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${props => props.theme.fontSizes['5xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.2;
  
  span {
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  max-width: 500px;
  line-height: 1.6;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

const MissionSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const MissionContent = styled.div``;

const MissionTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

const MissionText = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text};
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const MissionImage = styled.div`
  position: relative;
  height: 400px;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80') center/cover;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%);
    z-index: 2;
  }
`;

const ValuesSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.cream} 0%, ${props => props.theme.colors.white} 100%);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const ValueCard = styled(motion.div)`
  background: #FFFFFF !important;
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 10;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(139, 92, 246, 0.2);
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
`;

const ValueTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ValueDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
`;

const StorySection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const StoryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  text-align: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const StoryTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

const StoryText = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text};
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const BibleVerse = styled.blockquote`
  font-style: italic;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.primary};
  margin: ${props => props.theme.spacing.xl} 0;
  padding: ${props => props.theme.spacing.lg};
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%);
  border-radius: ${props => props.theme.borderRadius.lg};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background-image: 
      radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.95) 0%, transparent 50%),
      radial-gradient(circle at 50% 40%, rgba(139, 92, 246, 0.85) 0%, transparent 50%),
      radial-gradient(circle at 50% 60%, rgba(139, 92, 246, 0.90) 0%, transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.80) 0%, transparent 50%),
      radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.92) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.88) 0%, transparent 40%),
      radial-gradient(circle at 50% 70%, rgba(139, 92, 246, 0.87) 0%, transparent 40%),
      radial-gradient(circle at 50% 90%, rgba(139, 92, 246, 0.83) 0%, transparent 40%);
    animation: float 28s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background-image: 
      radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.98) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.93) 0%, transparent 50%),
      radial-gradient(circle at 50% 70%, rgba(139, 92, 246, 0.95) 0%, transparent 50%),
      radial-gradient(circle at 50% 90%, rgba(139, 92, 246, 0.91) 0%, transparent 50%),
      radial-gradient(circle at 50% 25%, rgba(139, 92, 246, 0.96) 0%, transparent 40%),
      radial-gradient(circle at 50% 45%, rgba(139, 92, 246, 0.94) 0%, transparent 40%),
      radial-gradient(circle at 50% 65%, rgba(139, 92, 246, 0.89) 0%, transparent 40%),
      radial-gradient(circle at 50% 85%, rgba(139, 92, 246, 0.86) 0%, transparent 40%);
    animation: float 32s ease-in-out infinite reverse;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

const TeamSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.cream} 0%, ${props => props.theme.colors.white} 100%);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const TeamCard = styled(motion.div)`
  background: #FFFFFF !important;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(139, 92, 246, 0.2);
  }
`;

const TeamImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${props => props.backgroundImage ? `url(${props.backgroundImage}) center/cover` : 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.spacing.xl} auto ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.white};
  font-size: 2.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.backgroundImage ? 'rgba(139, 92, 246, 0.3)' : 'transparent'};
    border-radius: 50%;
  }
`;

const TeamInfo = styled.div`
  padding: ${props => props.theme.spacing.xl};
`;

const TeamName = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const TeamRole = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TeamBio = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  font-size: ${props => props.theme.fontSizes.sm};
`;

const About = () => {
  const values = [
    {
      icon: <FiHeart />,
      title: 'Faith-Centered',
      description: 'All our services are rooted in Christian principles and biblical wisdom, providing spiritual guidance alongside professional care.'
    },
    {
      icon: <FiTarget />,
      title: 'Purpose-Driven',
      description: 'We help women and families discover their God-given purpose and live authentically according to His plan for their lives.'
    },
    {
      icon: <FiShield />,
      title: 'Safe & Confidential',
      description: 'Creating a secure, judgment-free environment where clients can openly share and heal without fear of stigma.'
    },
    {
      icon: <FiUsers />,
      title: 'Community-Focused',
      description: 'Building supportive networks and fostering meaningful connections that promote healing and growth together.'
    },
    {
      icon: <FiAward />,
      title: 'Excellence',
      description: 'Maintaining the highest standards of professional care while integrating faith-based principles and compassionate service.'
    },
    {
      icon: <FiBookOpen />,
      title: 'Continuous Growth',
      description: 'Committed to ongoing learning, spiritual development, and staying current with best practices in mental health care.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & Lead Therapist',
      bio: 'Licensed clinical psychologist with over 15 years of experience in faith-based therapy and family counseling.',
      icon: undefined,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Mentorship Coordinator',
      bio: 'Dedicated to empowering women through faith-based mentorship and community building.',
      icon: undefined,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Jennifer Williams',
      role: 'Community Outreach Director',
      bio: 'Passionate about serving families in need and creating lasting impact through faith-based initiatives.',
      icon: undefined,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Project Clay
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A Christ-centered initiative dedicated to molding women and families into all God has called them to be. 
              Rooted in Isaiah 64:8, we provide comprehensive mental health services that integrate faith and professional care.
            </HeroSubtitle>
          </HeroText>
                      <HeroImageContainer>
              <HeroImage>
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80" alt="About Project Clay" />
              </HeroImage>
            </HeroImageContainer>
        </HeroContent>
      </HeroSection>

      <MissionSection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Mission & Vision
          </SectionTitle>
          
          <MissionGrid>
            <MissionContent>
              <MissionTitle>Our Mission</MissionTitle>
              <MissionText>
                To provide Christ-centered therapy, coaching, and mentorship services that empower women and families 
                to overcome life's challenges, discover their God-given purpose, and live authentically according to His plan.
              </MissionText>
              <MissionText>
                We believe that true healing comes from addressing the whole person - mind, body, and spirit - 
                through a combination of professional mental health care and spiritual guidance.
              </MissionText>
            </MissionContent>
            
            <MissionImage
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </MissionGrid>
        </div>
      </MissionSection>

      <ValuesSection className="cream-section">
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </SectionTitle>
          
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </div>
      </ValuesSection>

      <StorySection>
        <div className="container">
          <StoryContent>
            <StoryTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Story
            </StoryTitle>
            <StoryText
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Project Clay was born from a deep conviction that mental health care should be accessible, 
              compassionate, and rooted in faith. Our founder, Dr. Sarah Johnson, experienced firsthand 
              the transformative power of combining professional therapy with spiritual guidance.
            </StoryText>
            <BibleVerse
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              "Yet you, Lord, are our Father. We are the clay, you are the potter; we are all the work of your hand." - Isaiah 64:8
            </BibleVerse>
          </StoryContent>
        </div>
      </StorySection>

      <TeamSection className="cream-section">
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </SectionTitle>
          
          <TeamGrid>
            {team.map((member, index) => (
              <TeamCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TeamImage backgroundImage={member.image}>{member.icon}</TeamImage>
                <TeamInfo>
                  <TeamName>{member.name}</TeamName>
                  <TeamRole>{member.role}</TeamRole>
                  <TeamBio>{member.bio}</TeamBio>
                </TeamInfo>
              </TeamCard>
            ))}
          </TeamGrid>
        </div>
      </TeamSection>
    </AboutContainer>
  );
};

export default About; 