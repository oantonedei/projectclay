import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHeart, FiChevronDown } from 'react-icons/fi';

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'blur(5px)'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(139, 92, 246, 0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  text-decoration: none;
  color: ${props => props.theme.colors.darkPurple};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  transition: color 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: 1.2rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
  flex: 1;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.darkPurple};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.base};
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const ServicesDropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  cursor: pointer;
  color: ${props => props.theme.colors.darkPurple};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.base};
  transition: all 0.3s ease;
  white-space: nowrap;
  padding: ${props => props.theme.spacing.sm} 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const DropdownIcon = styled(FiChevronDown)`
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-width: 200px;
  padding: 8px 0;
  margin-top: 8px;
  z-index: 1001;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 12px 16px;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
    color: #8B5CF6;
  }
  
  &.active {
    background-color: #f3f4f6;
    color: #8B5CF6;
    border-left: 3px solid #8B5CF6;
  }
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.md};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.darkPurple};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  flex-shrink: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileMenu = styled(motion.div)`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileNavLinks = styled.div`
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const MobileNavLink = styled(Link)`
  color: ${props => props.theme.colors.darkPurple};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.lg};
  padding: ${props => props.theme.spacing.sm} 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileCTAButton = styled(Link)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.md};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
  ];

  const servicesLinks = [
    { to: '/therapy-coaching', label: 'Therapy & Coaching' },
    { to: '/mentorship', label: 'Mentorship' },
    { to: '/community-outreach', label: 'Community Outreach' }
  ];

  const isActive = (path) => location.pathname === path;
  const isServicesActive = () => servicesLinks.some(link => isActive(link.to));

  return (
    <NavbarContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <NavbarContent>
        <Logo to="/">
          <LogoIcon>
            <FiHeart />
          </LogoIcon>
          Project Clay
        </Logo>

        <NavLinks>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              active={isActive(link.to)}
            >
              {link.label}
            </NavLink>
          ))}
          
          <ServicesDropdown
            ref={dropdownRef}
            active={isServicesActive()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          >
            Services
            <DropdownIcon isOpen={servicesDropdownOpen} />
            
            {servicesDropdownOpen && (
              <DropdownMenu
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {servicesLinks.map((link) => (
                  <DropdownItem
                    key={link.to}
                    to={link.to}
                    className={isActive(link.to) ? 'active' : ''}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    {link.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </ServicesDropdown>
        </NavLinks>
        
        <CTAButton to="/donate">Donate</CTAButton>

        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </NavbarContent>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLinks>
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </MobileNavLink>
              ))}
              
              <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold', color: '#8B5CF6', marginBottom: '8px' }}>Services</div>
                {servicesLinks.map((link) => (
                  <MobileNavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ paddingLeft: '20px', fontSize: '0.9rem' }}
                  >
                    {link.label}
                  </MobileNavLink>
                ))}
              </div>
              
              <MobileCTAButton to="/donate" onClick={() => setMobileMenuOpen(false)}>
                Donate
              </MobileCTAButton>
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar; 