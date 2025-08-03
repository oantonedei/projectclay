import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import TherapyCoaching from './pages/TherapyCoaching';
import Mentorship from './pages/Mentorship';
import CommunityOutreach from './pages/CommunityOutreach';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/therapy-coaching" element={<TherapyCoaching />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/community-outreach" element={<CommunityOutreach />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 