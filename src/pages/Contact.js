import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiMessageCircle, FiSend, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

const ContactContainer = styled.div`
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

const ContactSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const ContactForm = styled.form`
  background: ${props => props.theme.colors.cream};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const FormTitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: center;
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
    border: 2px solid ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.borderRadius.md};
    font-size: ${props => props.theme.fontSizes.base};
    transition: all ${props => props.theme.transitions.fast};
    background: ${props => props.theme.colors.white};
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
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.lg};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.cream};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  
  .icon {
    width: 50px;
    height: 50px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${props => props.theme.spacing.lg};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.lg};
    flex-shrink: 0;
  }
  
  .content {
    h4 {
      color: ${props => props.theme.colors.secondary};
      margin-bottom: ${props => props.theme.spacing.xs};
    }
    
    p {
      color: ${props => props.theme.colors.textLight};
      margin: 0;
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: ${props => props.theme.spacing['2xl']};
  
  h3 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: ${props => props.theme.spacing.lg};
  }
  
  .social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: ${props => props.theme.spacing.md};
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border-radius: 50%;
    text-decoration: none;
    transition: all ${props => props.theme.transitions.fast};
    font-size: ${props => props.theme.fontSizes.lg};
    
    &:hover {
      background: ${props => props.theme.colors.secondary};
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.md};
    }
  }
`;

const MapSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.cream};
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const MapTitle = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const MapPlaceholder = styled.div`
  height: 400px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border-radius: ${props => props.theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      content: 'info@theprojectclay.com'
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      content: '+234 123 456 7890'
    },
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      content: 'Lagos, Nigeria'
    },
    {
      icon: <FiMessageCircle />,
      title: 'WhatsApp',
      content: '+234 123 456 7890'
    }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: 'https://facebook.com/projectclay' },
    { icon: <FiInstagram />, url: 'https://instagram.com/projectclay' },
    { icon: <FiTwitter />, url: 'https://twitter.com/projectclay' },
    { icon: <FiYoutube />, url: 'https://youtube.com/projectclay' }
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
    console.log('Contact form submitted:', formData);
  };

  return (
    <ContactContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you! Whether you have questions about our services, want to book a session, or simply want to connect, we're here to help.
          </HeroSubtitle>
        </div>
      </HeroSection>

      <ContactSection>
        <div className="container">
          <ContactContent>
            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Send us a Message</FormTitle>
              
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
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Therapy & Coaching">Therapy & Coaching</option>
                  <option value="Mentorship Programs">Mentorship Programs</option>
                  <option value="Community Outreach">Community Outreach</option>
                  <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                  <option value="Donation">Donation</option>
                  <option value="Other">Other</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us how we can help you..."
                />
              </FormGroup>
              
              <SubmitButton type="submit">
                <FiSend />
                Send Message
              </SubmitButton>
            </ContactForm>

            <ContactInfo>
              <h2>Contact Information</h2>
              
              {contactInfo.map((info, index) => (
                <ContactItem
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="icon">{info.icon}</div>
                  <div className="content">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </ContactItem>
              ))}

              <SocialLinks>
                <h3>Follow Us</h3>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </SocialLinks>
            </ContactInfo>
          </ContactContent>
        </div>
      </ContactSection>

      <MapSection>
        <div className="container">
          <MapContainer>
            <MapTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Find Us
            </MapTitle>
            <MapPlaceholder
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Interactive Map Coming Soon
            </MapPlaceholder>
          </MapContainer>
        </div>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact; 