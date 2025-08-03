import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.base};
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    overflow-x: hidden;
  }

  /* Mental Health Background Icons - Purple on white sections */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    background-image: 
      /* Large icons */
      radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.22) 0%, transparent 50%),
      radial-gradient(circle at 40% 70%, rgba(139, 92, 246, 0.24) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.21) 0%, transparent 50%),
      
      /* Medium icons */
      radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.28) 0%, transparent 40%),
      radial-gradient(circle at 10% 60%, rgba(139, 92, 246, 0.26) 0%, transparent 40%),
      radial-gradient(circle at 70% 90%, rgba(139, 92, 246, 0.23) 0%, transparent 40%),
      
      /* Small icons */
      radial-gradient(circle at 30% 10%, rgba(139, 92, 246, 0.30) 0%, transparent 30%),
      radial-gradient(circle at 85% 50%, rgba(139, 92, 246, 0.27) 0%, transparent 30%),
      radial-gradient(circle at 15% 85%, rgba(139, 92, 246, 0.29) 0%, transparent 30%),
      radial-gradient(circle at 95% 15%, rgba(139, 92, 246, 0.25) 0%, transparent 30%);
    animation: float 25s ease-in-out infinite;
  }

  /* Additional icon patterns using CSS shapes - Purple on white sections */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    background-image: 
      /* Heart shapes */
      radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.32) 0%, transparent 20%),
      radial-gradient(circle at 75% 35%, rgba(139, 92, 246, 0.29) 0%, transparent 25%),
      radial-gradient(circle at 45% 75%, rgba(139, 92, 246, 0.31) 0%, transparent 22%),
      radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.27) 0%, transparent 18%),
      
      /* Star shapes */
      radial-gradient(circle at 65% 15%, rgba(139, 92, 246, 0.34) 0%, transparent 15%),
      radial-gradient(circle at 35% 55%, rgba(139, 92, 246, 0.31) 0%, transparent 20%),
      radial-gradient(circle at 90% 65%, rgba(139, 92, 246, 0.28) 0%, transparent 16%),
      
      /* Checkmark shapes */
      radial-gradient(circle at 5% 45%, rgba(139, 92, 246, 0.30) 0%, transparent 12%),
      radial-gradient(circle at 55% 95%, rgba(139, 92, 246, 0.33) 0%, transparent 14%),
      radial-gradient(circle at 95% 35%, rgba(139, 92, 246, 0.29) 0%, transparent 11%);
    animation: float 30s ease-in-out infinite reverse;
  }

  /* White icons on purple sections */
  section[style*="background: linear-gradient(135deg, #8B5CF6"], 
  section[style*="background: linear-gradient(135deg, #7C3AED"],
  section[style*="background: #8B5CF6"],
  section[style*="background: #7C3AED"],
  .purple-section {
    position: relative;
  }

  section[style*="background: linear-gradient(135deg, #8B5CF6"]::before,
  section[style*="background: linear-gradient(135deg, #7C3AED"]::before,
  section[style*="background: #8B5CF6"]::before,
  section[style*="background: #7C3AED"]::before,
  .purple-section::before {
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

  section[style*="background: linear-gradient(135deg, #8B5CF6"]::after,
  section[style*="background: linear-gradient(135deg, #7C3AED"]::after,
  section[style*="background: #8B5CF6"]::after,
  section[style*="background: #7C3AED"]::after,
  .purple-section::after {
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

  /* Purple floating design for cream sections */
  .cream-section {
    position: relative;
  }

  .cream-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background-image: 
      /* Light purple icons on cream */
      radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.18) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.16) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.17) 0%, transparent 50%),
      radial-gradient(circle at 90% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
      
      /* Medium icons */
      radial-gradient(circle at 60% 50%, rgba(139, 92, 246, 0.19) 0%, transparent 40%),
      radial-gradient(circle at 10% 70%, rgba(139, 92, 246, 0.18) 0%, transparent 40%),
      radial-gradient(circle at 70% 10%, rgba(139, 92, 246, 0.16) 0%, transparent 40%),
      
      /* Small icons */
      radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.20) 0%, transparent 30%),
      radial-gradient(circle at 85% 60%, rgba(139, 92, 246, 0.18) 0%, transparent 30%),
      radial-gradient(circle at 15% 90%, rgba(139, 92, 246, 0.19) 0%, transparent 30%),
      radial-gradient(circle at 95% 25%, rgba(139, 92, 246, 0.17) 0%, transparent 30%);
    animation: float 27s ease-in-out infinite;
  }

  .cream-section::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background-image: 
      /* Additional shapes for cream sections */
      radial-gradient(circle at 25% 35%, rgba(139, 92, 246, 0.22) 0%, transparent 20%),
      radial-gradient(circle at 75% 45%, rgba(139, 92, 246, 0.20) 0%, transparent 25%),
      radial-gradient(circle at 45% 85%, rgba(139, 92, 246, 0.21) 0%, transparent 22%),
      radial-gradient(circle at 85% 95%, rgba(139, 92, 246, 0.19) 0%, transparent 18%),
      
      /* Star shapes */
      radial-gradient(circle at 65% 25%, rgba(139, 92, 246, 0.23) 0%, transparent 15%),
      radial-gradient(circle at 35% 65%, rgba(139, 92, 246, 0.21) 0%, transparent 20%),
      radial-gradient(circle at 95% 75%, rgba(139, 92, 246, 0.18) 0%, transparent 16%),
      
      /* Checkmark shapes */
      radial-gradient(circle at 5% 55%, rgba(139, 92, 246, 0.20) 0%, transparent 12%),
      radial-gradient(circle at 55% 15%, rgba(139, 92, 246, 0.22) 0%, transparent 14%),
      radial-gradient(circle at 100% 45%, rgba(139, 92, 246, 0.19) 0%, transparent 11%);
    animation: float 33s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-15px) rotate(2deg);
    }
    50% {
      transform: translateY(-8px) rotate(-1deg);
    }
    75% {
      transform: translateY(-20px) rotate(1deg);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: ${props => props.theme.fontWeights.semibold};
    line-height: 1.2;
    margin-bottom: ${props => props.theme.spacing.md};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes['5xl']};
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['4xl']};
    }
  }

  h2 {
    font-size: ${props => props.theme.fontSizes['4xl']};
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['3xl']};
    }
  }

  h3 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['2xl']};
    }
  }

  h4 {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }

  h5 {
    font-size: ${props => props.theme.fontSizes.xl};
  }

  h6 {
    font-size: ${props => props.theme.fontSizes.lg};
  }

  p {
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.textLight};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.fast};
    
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  ul, ol {
    margin-bottom: ${props => props.theme.spacing.md};
    padding-left: ${props => props.theme.spacing.lg};
  }

  li {
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: ${props => props.theme.fonts.body};
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${props => props.theme.transitions.fast};
  }

  input, textarea, select {
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.base};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.md};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: 0 ${props => props.theme.spacing.sm};
    }
  }

  .section {
    padding: ${props => props.theme.spacing['4xl']} 0;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: ${props => props.theme.spacing['2xl']} 0;
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
    border-radius: ${props => props.theme.borderRadius.lg};
    font-weight: ${props => props.theme.fontWeights.medium};
    text-decoration: none;
    transition: all ${props => props.theme.transitions.normal};
    cursor: pointer;
    border: none;
    outline: none;
    
    &--primary {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      
      &:hover {
        background-color: ${props => props.theme.colors.secondary};
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.shadows.lg};
      }
    }
    
    &--secondary {
      background-color: transparent;
      color: ${props => props.theme.colors.primary};
      border: 2px solid ${props => props.theme.colors.primary};
      
      &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        transform: translateY(-2px);
      }
    }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
    
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.6s ease;
    
    &.visible {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.6s ease;
    
    &.visible {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .scale-in {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.6s ease;
    
    &.visible {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.cream};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secondary};
  }

  /* Selection styling */
  ::selection {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }

  ::-moz-selection {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

export default GlobalStyles; 