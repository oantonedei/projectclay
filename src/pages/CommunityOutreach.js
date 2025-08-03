import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGift, FiHeart, FiUsers, FiBookOpen, FiDollarSign, FiArrowRight, FiCheck } from 'react-icons/fi';

const OutreachContainer = styled.div`
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
    background: url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
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

const ProjectsSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const ProjectsGrid = styled.div`
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

const ProjectCard = styled(motion.div)`
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

const ProjectImage = styled.div`
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

const ProjectImpact = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const ProjectIcon = styled.div`
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

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

const ProjectStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${props => props.theme.spacing.lg};
  
  .stat {
    text-align: center;
    
    .number {
      font-size: ${props => props.theme.fontSizes['2xl']};
      font-weight: ${props => props.theme.fontWeights.bold};
      color: ${props => props.theme.colors.primary};
    }
    
    .label {
      font-size: ${props => props.theme.fontSizes.sm};
      color: ${props => props.theme.colors.textLight};
    }
  }
`;

const SupportButton = styled.button`
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

const DonationSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.cream};
`;

const DonationContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  text-align: center;
`;

const DonationTitle = styled(motion.h2)`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const DonationDescription = styled(motion.p)`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  font-size: ${props => props.theme.fontSizes.lg};
`;

const DonationOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const DonationOption = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
  
  &.selected {
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    
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
        radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.14) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.11) 0%, transparent 50%);
      animation: float 26s ease-in-out infinite;
    }
  }
  
  h4 {
    color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.secondary};
    margin-bottom: ${props => props.theme.spacing.sm};
  }
  
  p {
    color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.textLight};
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

const DonateButton = styled.button`
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
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const TransparencySection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const TransparencyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  text-align: center;
`;

const TransparencyBox = styled(motion.div)`
  background: ${props => props.theme.colors.cream};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  position: relative;
  overflow: hidden;
  
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
`;

const TransparencyText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const VolunteerSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.cream};
`;

const VolunteerForm = styled.form`
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

const CommunityOutreach = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    availability: '',
    interests: '',
    message: ''
  });

  const [selectedDonation, setSelectedDonation] = useState(50);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
    {
      title: 'Family Support Program',
      description: 'Providing essential resources and support to families in need, including food assistance, clothing, and household items.',
      impact: '150+ families supported monthly',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
    },
    {
      title: 'Mental Health Awareness',
      description: 'Educational workshops and resources to promote mental health awareness and reduce stigma in our community.',
      impact: '500+ individuals reached',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80'
    },
    {
      title: 'Youth Mentorship Initiative',
      description: 'Supporting at-risk youth through mentorship, educational programs, and positive role modeling.',
      impact: '75+ youth mentored',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const donationOptions = [
    { amount: '25', description: 'Provides a week of meals for a family' },
    { amount: '50', description: 'Covers one counseling session' },
    { amount: '100', description: 'Supports educational resources for 5 children' },
    { amount: '250', description: 'Funds a complete outreach program' }
  ];

  const handleDonation = () => {
    // Integrate with payment gateway
    console.log('Donation amount:', selectedDonation);
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer application:', formData);
  };

  const handleVolunteerInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <OutreachContainer>
      <HeroSection>
        <div className="container">
          <HeroContent>
            <HeroText>
              <HeroTitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Community Outreach
              </HeroTitle>
              <HeroSubtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Making a positive impact in our community through charitable projects, free services, and volunteer support. Together, we can create lasting change and bring hope to those in need.
              </HeroSubtitle>
            </HeroText>
            <HeroImage>
              <img src="https://images.unsplash.com/photo-1517486803460-639685280e30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Community Outreach" />
            </HeroImage>
          </HeroContent>
        </div>
      </HeroSection>

      <ProjectsSection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Outreach Projects
          </SectionTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage backgroundImage={project.image} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectImpact>{project.impact}</ProjectImpact>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </div>
      </ProjectsSection>

      <DonationSection>
        <div className="container">
          <DonationContent>
            <DonationTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Support Our Outreach
            </DonationTitle>
            <DonationDescription
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Your generous donations help us continue our community outreach efforts and make a difference in the lives of families and individuals in need.
            </DonationDescription>
            
            <DonationOptions>
              {donationOptions.map((option, index) => (
                <DonationOption
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={selectedDonation === option.amount ? 'selected' : ''}
                  onClick={() => setSelectedDonation(option.amount)}
                >
                  <h4>${option.amount}</h4>
                  <p>{option.description}</p>
                </DonationOption>
              ))}
            </DonationOptions>

            <DonateButton
              onClick={handleDonation}
              as={motion.button}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              disabled={!selectedDonation}
            >
              Donate ${selectedDonation || 'Now'}
            </DonateButton>
          </DonationContent>
        </div>
      </DonationSection>

      <TransparencySection>
        <div className="container">
          <TransparencyContent>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Transparency & Accountability
            </SectionTitle>
            <TransparencyBox
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TransparencyText>
                <strong>Important Notice:</strong> Project Clay is a registered Limited Liability Company. All outreach efforts are independently funded through our services, partners, and community donations. We are not a registered non-profit organization.
              </TransparencyText>
              <TransparencyText>
                We are committed to transparency and accountability in all our operations. Your donations directly support our community outreach programs and help us continue making a positive impact.
              </TransparencyText>
            </TransparencyBox>
          </TransparencyContent>
        </div>
      </TransparencySection>

      <VolunteerSection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Become a Volunteer
          </SectionTitle>
          <VolunteerForm onSubmit={handleVolunteerSubmit}>
            <FormGroup>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleVolunteerInputChange}
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
                onChange={handleVolunteerInputChange}
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
                onChange={handleVolunteerInputChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="experience">Previous Experience</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleVolunteerInputChange}
                placeholder="Tell us about any previous volunteer or community service experience..."
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="interests">Areas of Interest *</label>
              <select
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleVolunteerInputChange}
                required
              >
                <option value="">Select an area</option>
                <option value="Food Drives">Food Drives</option>
                <option value="Counseling Support">Counseling Support</option>
                <option value="Educational Support">Educational Support</option>
                <option value="Clothing Donations">Clothing Donations</option>
                <option value="General Support">General Support</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="availability">Availability</label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleVolunteerInputChange}
              >
                <option value="">Select availability</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Evenings">Evenings</option>
                <option value="Flexible">Flexible</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Why would you like to volunteer? *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleVolunteerInputChange}
                required
                placeholder="Tell us about your motivation and what you hope to contribute..."
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              Submit Application
            </SubmitButton>
          </VolunteerForm>
        </div>
      </VolunteerSection>
    </OutreachContainer>
  );
};

export default CommunityOutreach; 