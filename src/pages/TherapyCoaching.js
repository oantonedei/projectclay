import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiCalendar, FiDollarSign, FiCheck, FiArrowRight, FiPlay, FiShield, FiStar } from 'react-icons/fi';

const TherapyContainer = styled.div`
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
    background: url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
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

const ServicesSection = styled.section`
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
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${props => props.theme.colors.cream};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: 3rem;
  position: relative;
  background-image: ${props => props.backgroundImage || 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
    opacity: 0.3;
  }
`;

const ServiceContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
`;

const ServiceTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text};
  
  svg {
    color: ${props => props.theme.colors.primary};
    flex-shrink: 0;
  }
`;

const PricingSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.cream} 0%, ${props => props.theme.colors.white} 100%);
`;

const PricingGrid = styled.div`
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

const PricingCard = styled(motion.div)`
  background: #FFFFFF !important;
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['2xl']};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
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
  
  &.featured {
    position: relative;
    transform: scale(1.05);
    
    &::after {
      content: 'Most Popular';
      position: absolute;
      top: 20px;
      right: -30px;
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      padding: 4px 40px;
      font-size: 0.8rem;
      font-weight: ${props => props.theme.fontWeights.medium};
      transform: rotate(45deg);
    }
    
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
  }
`;

const PricingTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.darkPurple};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const PricingAmount = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const PricingPeriod = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PricingFeature = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text};
  
  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const BookButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
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

const TherapyCoaching = () => {
  const services = [
    {
      title: 'Individual Therapy',
      description: 'One-on-one counseling sessions tailored to your unique needs and spiritual journey. We address anxiety, depression, trauma, and life transitions through a faith-based lens.',
      features: ['Personalized treatment plans', 'Faith-integrated approach', 'Flexible scheduling', 'In-person & virtual sessions'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80'
    },
    {
      title: 'Family Counseling',
      description: 'Strengthen family bonds and resolve conflicts through Christian family therapy. We help families communicate better, heal from past hurts, and grow together in faith.',
      features: ['Family systems approach', 'Communication skills', 'Conflict resolution', 'Faith-based guidance'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
    },
    {
      title: 'Marriage Coaching',
      description: 'Transform your marriage through faith-based coaching. We help couples build stronger relationships, improve communication, and deepen their spiritual connection.',
      features: ['Couples counseling', 'Marriage enrichment', 'Communication tools', 'Spiritual growth'],
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Life Coaching',
      description: 'Discover your purpose and achieve your goals with Christian life coaching. We help you align your life with God\'s plan and overcome obstacles to success.',
      features: ['Goal setting & planning', 'Purpose discovery', 'Obstacle overcoming', 'Faith-based motivation'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const pricingPlans = [
    {
      title: 'Single Session',
      amount: '$150',
      period: 'per session',
      features: ['60-minute session', 'Personalized approach', 'Faith-based guidance', 'Follow-up resources'],
      featured: false
    },
    {
      title: 'Monthly Package',
      amount: '$500',
      period: 'per month',
      features: ['4 sessions per month', 'Priority scheduling', 'Email support', 'Resource library access'],
      featured: true
    },
    {
      title: 'Family Package',
      amount: '$800',
      period: 'per month',
      features: ['Family sessions', 'Individual sessions', 'Group workshops', '24/7 crisis support'],
      featured: false
    }
  ];

  const testimonials = [
    {
      text: "The therapy sessions at Project Clay have been transformative. The combination of professional care and spiritual guidance has helped me heal in ways I never thought possible.",
      name: "Sarah M.",
      title: "Individual Therapy Client"
    },
    {
      text: "Our family coaching sessions have strengthened our relationships and improved our communication. We're so grateful for the faith-based approach.",
      name: "The Johnson Family",
      title: "Family Coaching Clients"
    },
    {
      text: "The life coaching program helped me discover my God-given purpose and gave me the tools to pursue my dreams with confidence.",
      name: "Rebecca L.",
      title: "Life Coaching Client"
    }
  ];

  return (
    <TherapyContainer>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Therapy & Coaching Services
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional mental health therapy and life coaching services rooted in Christian principles. 
              Discover healing, growth, and purpose through faith-based care.
            </HeroSubtitle>
          </HeroText>
          <HeroImage>
            <img src="https://images.unsplash.com/photo-1517486803000-000000000000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Therapy and Coaching" />
          </HeroImage>
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
          
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ServiceImage backgroundImage={`url(${service.image})`}>
                </ServiceImage>
                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceFeatures>
                    {service.features.map((feature, featureIndex) => (
                      <ServiceFeature key={featureIndex}>
                        <FiCheck />
                        {feature}
                      </ServiceFeature>
                    ))}
                  </ServiceFeatures>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </div>
      </ServicesSection>

      <PricingSection className="cream-section">
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pricing Plans
          </SectionTitle>
          
          <PricingGrid>
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                className={plan.featured ? 'featured' : ''}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <PricingTitle>{plan.title}</PricingTitle>
                <PricingAmount>{plan.amount}</PricingAmount>
                <PricingPeriod>{plan.period}</PricingPeriod>
                <PricingFeatures>
                  {plan.features.map((feature, featureIndex) => (
                    <PricingFeature key={featureIndex}>
                      <FiCheck />
                      {feature}
                    </PricingFeature>
                  ))}
                </PricingFeatures>
                <BookButton href="https://calendly.com/projectclay" target="_blank" rel="noopener noreferrer">
                  <FiCalendar />
                  Book Now
                </BookButton>
              </PricingCard>
            ))}
          </PricingGrid>
        </div>
      </PricingSection>

      <TestimonialsSection>
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </SectionTitle>
          
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar>{testimonial.name.split(' ').map(n => n[0]).join('')}</AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </div>
      </TestimonialsSection>
    </TherapyContainer>
  );
};

export default TherapyCoaching; 