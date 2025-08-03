import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiHeart, FiUsers, FiBookOpen, FiGift, FiArrowRight, FiPlay, FiShield, FiStar } from 'react-icons/fi';

const HomeContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  min-height: 100vh;
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
    background: url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80') center/cover;
    opacity: 0.08;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  text-align: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${props => props.theme.fontSizes['6xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  font-weight: ${props => props.theme.fontWeights.semibold};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.normal};
  font-size: ${props => props.theme.fontSizes.lg};
  position: relative;
  overflow: hidden;
  
  &.primary {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
    color: ${props => props.theme.colors.white};
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);
    }
  }
  
  &.secondary {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    
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
        radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
        radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.22) 0%, transparent 50%),
        radial-gradient(circle at 40% 70%, rgba(139, 92, 246, 0.24) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.21) 0%, transparent 50%),
        radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.28) 0%, transparent 40%),
        radial-gradient(circle at 10% 60%, rgba(139, 92, 246, 0.26) 0%, transparent 40%),
        radial-gradient(circle at 70% 90%, rgba(139, 92, 246, 0.23) 0%, transparent 40%);
      animation: float 26s ease-in-out infinite;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      background-image: 
        radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.32) 0%, transparent 20%),
        radial-gradient(circle at 75% 35%, rgba(139, 92, 246, 0.29) 0%, transparent 25%),
        radial-gradient(circle at 45% 75%, rgba(139, 92, 246, 0.31) 0%, transparent 22%),
        radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.27) 0%, transparent 18%),
        radial-gradient(circle at 65% 15%, rgba(139, 92, 246, 0.34) 0%, transparent 15%),
        radial-gradient(circle at 35% 55%, rgba(139, 92, 246, 0.30) 0%, transparent 20%),
        radial-gradient(circle at 90% 65%, rgba(139, 92, 246, 0.28) 0%, transparent 16%);
      animation: float 31s ease-in-out infinite reverse;
    }
    
    &:hover {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      transform: translateY(-2px);
    }
  }
`;

const ServicesSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes['5xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  max-width: 600px;
  margin: 0 auto ${props => props.theme.spacing['3xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

const ServicesGrid = styled.div`
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

const ServiceCard = styled(motion.div)`
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
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  background: ${props => props.background || 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'};
  background-image: ${props => props.backgroundImage || 'none'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: 3rem;
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

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  position: relative;
  z-index: 2;
`;

const ServiceTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.7;
`;

const ServiceLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: translateX(4px);
  }
`;

const TestimonialsSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const TestimonialsGrid = styled.div`
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

const TestimonialCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
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

const TestimonialText = styled.p`
  font-style: italic;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: 2px;
`;

const AuthorTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
`;

const CTASection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const CTATitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes['5xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.darkPurple};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const CTAText = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  color: ${props => props.theme.colors.textLight};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  font-weight: ${props => props.theme.fontWeights.semibold};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.normal};
  font-size: ${props => props.theme.fontSizes.lg};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.3);
  }
`;

const Home = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Molding Lives Through Faith
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Christ-centered therapy, coaching, and mentorship for women and families. 
            Discover healing, growth, and purpose through faith-based mental health services.
          </HeroSubtitle>
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroButton to="/therapy-coaching" className="primary">
              <FiHeart />
              Book a Session
            </HeroButton>
            <HeroButton to="/about" className="secondary">
              <FiArrowRight />
              Learn More
            </HeroButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Three comprehensive arms working together to support your journey of healing and growth
          </SectionSubtitle>
          
          <ServicesGrid>
            <ServiceCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceImage backgroundImage="url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80')">
                <ServiceIcon>
                  <FiHeart />
                </ServiceIcon>
              </ServiceImage>
              <ServiceTitle>Therapy & Coaching</ServiceTitle>
              <ServiceDescription>
                Professional mental health therapy and life coaching services rooted in Christian principles. 
                Individual and family sessions available both in-person and virtually.
              </ServiceDescription>
              <ServiceLink to="/therapy-coaching">
                Learn More <FiArrowRight />
              </ServiceLink>
            </ServiceCard>

            <ServiceCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceImage backgroundImage="url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')">
                <ServiceIcon>
                  <FiUsers />
                </ServiceIcon>
              </ServiceImage>
              <ServiceTitle>Mentorship Programs</ServiceTitle>
              <ServiceDescription>
                Quarterly mentorship programs for young women, new wives, and older wives. 
                Join our supportive community and grow together in faith and purpose.
              </ServiceDescription>
              <ServiceLink to="/mentorship">
                Join Program <FiArrowRight />
              </ServiceLink>
            </ServiceCard>

            <ServiceCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceImage backgroundImage="url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')">
                <ServiceIcon>
                  <FiGift />
                </ServiceIcon>
              </ServiceImage>
              <ServiceTitle>Community Outreach</ServiceTitle>
              <ServiceDescription>
                Charitable initiatives and community support programs. 
                Making a difference through faith-based service and compassionate care.
              </ServiceDescription>
              <ServiceLink to="/community-outreach">
                Get Involved <FiArrowRight />
              </ServiceLink>
            </ServiceCard>
          </ServicesGrid>
        </div>
      </ServicesSection>

      <TestimonialsSection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </SectionTitle>
          
          <TestimonialsGrid>
            <TestimonialCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TestimonialText>
                "Project Clay has been a lifeline for me. The faith-based approach combined with professional therapy 
                has helped me heal in ways I never thought possible."
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>SM</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>Sarah Mitchell</AuthorName>
                  <AuthorTitle>Therapy Client</AuthorTitle>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>

            <TestimonialCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TestimonialText>
                "The mentorship program has transformed my marriage and my relationship with God. 
                I've found a community of women who truly understand and support me."
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>JD</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>Jennifer Davis</AuthorName>
                  <AuthorTitle>Mentorship Participant</AuthorTitle>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>

            <TestimonialCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TestimonialText>
                "As a family, we've grown stronger through Project Clay's coaching services. 
                The Christian foundation makes all the difference in our healing journey."
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>TW</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>Thomas & Wendy</AuthorName>
                  <AuthorTitle>Family Coaching Clients</AuthorTitle>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </div>
      </TestimonialsSection>

      <CTASection>
        <CTAContent>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Begin Your Journey?
          </CTATitle>
          <CTAText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Take the first step towards healing, growth, and purpose. 
            Our team is here to support you every step of the way.
          </CTAText>
          <CTAButton
            to="/contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FiArrowRight />
            Get Started Today
          </CTAButton>
        </CTAContent>
      </CTASection>
    </HomeContainer>
  );
};

export default Home; 