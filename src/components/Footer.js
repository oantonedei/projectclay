import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiHeart, FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiArrowRight } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${props => props.theme.colors.darkPurple} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['4xl']} 0 ${props => props.theme.spacing['2xl']};
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
      /* Large white icons */
      radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 85% 35%, rgba(255, 255, 255, 0.17) 0%, transparent 50%),
      radial-gradient(circle at 35% 75%, rgba(255, 255, 255, 0.19) 0%, transparent 50%),
      radial-gradient(circle at 95% 85%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
      
      /* Medium white icons */
      radial-gradient(circle at 55% 45%, rgba(255, 255, 255, 0.22) 0%, transparent 40%),
      radial-gradient(circle at 5% 65%, rgba(255, 255, 255, 0.2) 0%, transparent 40%),
      radial-gradient(circle at 75% 95%, rgba(255, 255, 255, 0.17) 0%, transparent 40%),
      
      /* Small white icons */
      radial-gradient(circle at 25% 15%, rgba(255, 255, 255, 0.24) 0%, transparent 30%),
      radial-gradient(circle at 90% 55%, rgba(255, 255, 255, 0.21) 0%, transparent 30%),
      radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.23) 0%, transparent 30%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.19) 0%, transparent 30%);
    animation: float 28s ease-in-out infinite;
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
      /* Heart shapes - white */
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.26) 0%, transparent 20%),
      radial-gradient(circle at 80% 40%, rgba(255, 255, 255, 0.23) 0%, transparent 25%),
      radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.25) 0%, transparent 22%),
      radial-gradient(circle at 90% 90%, rgba(255, 255, 255, 0.21) 0%, transparent 18%),
      
      /* Star shapes - white */
      radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.28) 0%, transparent 15%),
      radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.25) 0%, transparent 20%),
      radial-gradient(circle at 95% 70%, rgba(255, 255, 255, 0.22) 0%, transparent 16%),
      
      /* Checkmark shapes - white */
      radial-gradient(circle at 10% 50%, rgba(255, 255, 255, 0.24) 0%, transparent 12%),
      radial-gradient(circle at 60% 100%, rgba(255, 255, 255, 0.27) 0%, transparent 14%),
      radial-gradient(circle at 100% 40%, rgba(255, 255, 255, 0.23) 0%, transparent 11%);
    animation: float 32s ease-in-out infinite reverse;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  position: relative;
  z-index: 2;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['3xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${props => props.theme.spacing.xl};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`;

const FooterSection = styled.div``;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.white} 0%, rgba(255, 255, 255, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
`;

const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${props => props.theme.spacing.md};
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.base};
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const NewsletterButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background: linear-gradient(135deg, ${props => props.theme.colors.white} 0%, rgba(255, 255, 255, 0.9) 100%);
  color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const FooterTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.white};
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const FooterLinkItem = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  
  &:hover {
    color: ${props => props.theme.colors.white};
    transform: translateX(4px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: rgba(255, 255, 255, 0.8);
`;

const ContactIcon = styled.div`
  width: 20px;
  color: ${props => props.theme.colors.accent};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${props => props.theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: ${props => props.theme.fontSizes.sm};
`;

const TransparencyNotice = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: ${props => props.theme.fontSizes.sm};
  max-width: 400px;
  line-height: 1.5;
`;

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterLogo>
              <LogoIcon>
                <FiHeart />
              </LogoIcon>
              Project Clay
            </FooterLogo>
            <FooterDescription>
              Christ-centered therapy, coaching, and mentorship for women and families. 
              Molding lives through faith-based mental health services and community support.
            </FooterDescription>
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput
                type="email"
                placeholder="Enter your email"
                required
              />
              <NewsletterButton type="submit">
                Subscribe
              </NewsletterButton>
            </NewsletterForm>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FiFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <FiInstagram />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <FiTwitter />
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                <FiYoutube />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <FooterLinkItem to="/">
                  <FiArrowRight />
                  Home
                </FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/about">
                  <FiArrowRight />
                  About Us
                </FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/therapy-coaching">
                  <FiArrowRight />
                  Therapy & Coaching
                </FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/mentorship">
                  <FiArrowRight />
                  Mentorship
                </FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/community-outreach">
                  <FiArrowRight />
                  Community Outreach
                </FooterLinkItem>
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <FooterLinkItem to="/therapy-coaching">
                  <FiArrowRight />
                  Individual Therapy
                </FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/therapy-coaching">
                  <FiArrowRight />
                  Family Coaching
                </FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/mentorship">
                  <FiArrowRight />
                  Young Women Mentorship
                </FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/mentorship">
                  <FiArrowRight />
                  Marriage Mentorship
                </FooterLinkItem>
              </FooterLink>
              <FooterLink>
                <FooterLinkItem to="/community-outreach">
                  <FiArrowRight />
                  Community Programs
                </FooterLinkItem>
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <FiMail />
                </ContactIcon>
                <span>hello@theprojectclay.com</span>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FiPhone />
                </ContactIcon>
                <span>+234 123 456 7890</span>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FiMapPin />
                </ContactIcon>
                <span>Lagos, Nigeria</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © 2024 Project Clay. All rights reserved.
          </Copyright>
          <TransparencyNotice>
            Project Clay is a faith-based LLC providing mental health services. 
            We are independently funded and not a registered non-profit organization.
          </TransparencyNotice>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 