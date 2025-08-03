import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUsers, FiCalendar, FiMessageCircle, FiBookOpen, FiArrowRight, FiCheck } from 'react-icons/fi';

const MentorshipContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  min-height: 60vh;
  background: linear-gradient(135deg, ${props => props.theme.colors.white} 0%, ${props => props.theme.colors.cream} 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80') center/cover;
    opacity: 0.4;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(248, 250, 252, 0.3) 100%);
    z-index: 2;
  }
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
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.sm};
    text-align: center;
  }
`;

const HeroText = styled.div`
  text-align: left;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    text-align: center;
  }
`;

const HeroImage = styled.div`
  position: relative;
  height: 500px;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 350px;
    order: -1;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${props => props.theme.fontSizes['5xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.2;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

const ProgramsSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const ProgramCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['2xl']};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${props => props.theme.colors.cream};
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.07) 0%, transparent 50%),
      radial-gradient(circle at 90% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    animation: float 27s ease-in-out infinite;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
    
    &::before {
      background-image: 
        radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.22) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.24) 0%, transparent 50%),
        radial-gradient(circle at 90% 70%, rgba(139, 92, 246, 0.21) 0%, transparent 50%);
    }
  }
`;

const ProgramImage = styled.div`
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

const ProgramIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes['2xl']};
`;

const ProgramTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ProgramDuration = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const ProgramDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

const ProgramFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${props => props.theme.spacing.lg};
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.textLight};
    
    svg {
      color: ${props => props.theme.colors.primary};
      margin-right: ${props => props.theme.spacing.sm};
      flex-shrink: 0;
    }
  }
`;

const ProgramFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.textLight};
  
  svg {
    color: ${props => props.theme.colors.primary};
    margin-right: ${props => props.theme.spacing.sm};
    flex-shrink: 0;
  }
`;

const ApplyButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const ApplicationSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.cream};
`;

const ApplicationForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing['2xl']};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
  
  label {
    display: block;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.secondary};
    font-weight: ${props => props.theme.fontWeights.medium};
  }
  
  input, select, textarea {
    width: 100%;
    padding: ${props => props.theme.spacing.md};
    border: 2px solid ${props => props.theme.colors.cream};
    border-radius: ${props => props.theme.borderRadius.md};
    font-size: ${props => props.theme.fontSizes.base};
    transition: all ${props => props.theme.transitions.fast};
    position: relative;
    overflow: hidden;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        background-image: 
          radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(139, 92, 246, 0.14) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.11) 0%, transparent 50%);
        animation: float 26s ease-in-out infinite;
      }
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const CommunitySection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const CommunityCard = styled(motion.div)`
  background: ${props => props.theme.colors.cream};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.md};
`;

const CommunityIcon = styled.div`
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

const CommunityTitle = styled.h4`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const CommunityDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

const CommunityButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const Mentorship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    program: '',
    experience: '',
    goals: '',
    availability: ''
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const programs = [
    {
      title: 'Young Women (18-25)',
      description: 'Quarterly mentorship program designed for young women navigating early adulthood, career decisions, and personal growth.',
      features: ['Career guidance', 'Personal development', 'Faith foundation', 'Community support'],
      duration: '12 weeks',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'New Wives (0-5 years)',
      description: 'Support and guidance for newly married women as they navigate the beautiful journey of marriage and partnership.',
      features: ['Marriage enrichment', 'Communication skills', 'Relationship building', 'Spiritual growth'],
      duration: '12 weeks',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Older Wives (5+ years)',
      description: 'Advanced mentorship for experienced wives looking to deepen their relationships and support other women.',
      features: ['Leadership development', 'Mentoring others', 'Advanced relationship skills', 'Community leadership'],
      duration: '12 weeks',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const communityPlatforms = [
    {
      icon: <FiMessageCircle />,
      title: 'Telegram Community',
      description: 'Join our private Telegram group for daily encouragement, prayer requests, and community support.',
      link: 'https://t.me/projectclay'
    },
    {
      icon: <FiUsers />,
      title: 'Facebook Group',
      description: 'Connect with other women in our Facebook community for resources, events, and fellowship.',
      link: 'https://facebook.com/groups/projectclay'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  return (
    <MentorshipContainer>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Mentorship Programs
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join our quarterly mentorship programs designed to empower women at different stages of life. Connect with mentors, build community, and grow in your faith journey.
            </HeroSubtitle>
          </HeroText>
          <HeroImage>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" alt="Mentorship Program" />
          </HeroImage>
        </HeroContent>
      </HeroSection>

      <ProgramsSection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Programs
          </SectionTitle>
          <ProgramsGrid>
            {programs.map((program, index) => (
              <ProgramCard
                key={program.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ProgramImage backgroundImage={program.image} />
                <ProgramTitle>{program.title}</ProgramTitle>
                <ProgramDuration>{program.duration}</ProgramDuration>
                <ProgramDescription>{program.description}</ProgramDescription>
                <ProgramFeatures>
                  {program.features.map((feature, index) => (
                    <ProgramFeature key={index}>
                      <FiCheck />
                      {feature}
                    </ProgramFeature>
                  ))}
                </ProgramFeatures>
              </ProgramCard>
            ))}
          </ProgramsGrid>
        </div>
      </ProgramsSection>

      <ApplicationSection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Apply for Mentorship
          </SectionTitle>
          <ApplicationForm onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="program">Program Interest *</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a program</option>
                <option value="Young Women Mentorship">Young Women Mentorship</option>
                <option value="New Wives Program">New Wives Program</option>
                <option value="Older Wives Mentorship">Older Wives Mentorship</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="age">Age Range</label>
              <select
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              >
                <option value="">Select age range</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46+">46+</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Why are you interested in this program? *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell us about your goals and what you hope to gain from this mentorship program..."
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              Submit Application
            </SubmitButton>
          </ApplicationForm>
        </div>
      </ApplicationSection>

      <CommunitySection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join Our Community
          </SectionTitle>
          <CommunityGrid>
            {communityPlatforms.map((platform, index) => (
              <CommunityCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CommunityIcon>{platform.icon}</CommunityIcon>
                <CommunityTitle>{platform.title}</CommunityTitle>
                <CommunityDescription>{platform.description}</CommunityDescription>
                <CommunityButton href={platform.link} target="_blank" rel="noopener noreferrer">
                  Join Now <FiArrowRight />
                </CommunityButton>
              </CommunityCard>
            ))}
          </CommunityGrid>
        </div>
      </CommunitySection>
    </MentorshipContainer>
  );
};

export default Mentorship; 