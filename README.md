# Project Clay - Christ-Centered Mental Health & Family Services

A beautiful, modern website for Project Clay, a Christ-centered initiative dedicated to molding women and families into all God has called them to be. Rooted in Isaiah 64:8, this platform provides therapy, coaching, mentorship, and community outreach services.

## 🌟 Features

### Frontend (React)
- **Modern Design**: Elegant, faith-filled, professional aesthetic
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG compliant design and navigation

### Pages & Sections
- **Home**: Hero section, services overview, testimonials, call-to-action
- **About**: Mission, vision, core values, and story
- **Therapy & Coaching**: Service details, booking system, testimonials
- **Mentorship**: Program information, application forms, community access
- **Community Outreach**: Charitable projects, donation options, volunteer opportunities
- **Blog & Resources**: Devotionals, practical teachings, free downloads
- **Contact**: Contact form, location information, social media links
- **Admin Panel**: Content management system for website administrators

### Backend (Node.js/Express)
- **RESTful API**: Complete backend for content management
- **Authentication**: JWT-based admin authentication
- **File Uploads**: Image and document upload functionality
- **Form Handling**: Contact forms, applications, newsletter subscriptions
- **Content Management**: CRUD operations for all website content
- **Security**: Input validation, CORS, helmet, rate limiting

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd projectclay
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   cd ..
   ```

3. **Environment Setup**
   ```bash
   # Create .env file in server directory
   cd server
   cp .env.example .env
   ```
   
   Edit `.env` file:
   ```env
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your-secret-key-here
   ```

4. **Start the development servers**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately:
   # Frontend only
   npm start
   
   # Backend only
   npm run server
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Panel: http://localhost:3000/admin

## 📁 Project Structure

```
projectclay/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── styles/            # Global styles and theme
│   ├── App.js             # Main app component
│   └── index.js           # App entry point
├── server/
│   ├── routes/            # API routes
│   ├── uploads/           # File uploads directory
│   └── index.js           # Server entry point
├── package.json           # Frontend dependencies
└── README.md             # This file
```

## 🎨 Design System

### Colors
- **Primary**: Rose Gold (#D4A574)
- **Secondary**: Brown (#8B4513)
- **White**: (#FFFFFF)
- **Cream**: (#FDF8F3)
- **Text**: Dark (#2C2C2C)
- **Text Light**: (#6B7280)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Responsive navigation with mobile menu
- Animated cards and sections
- Gradient buttons and backgrounds
- Form components with validation
- Modal dialogs and overlays

## 🔧 Configuration

### Frontend Configuration
The theme and styling can be customized in `src/styles/theme.js`:

```javascript
const theme = {
  colors: {
    primary: '#D4A574',
    secondary: '#8B4513',
    // ... more colors
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif"
  }
  // ... more theme options
};
```

### Backend Configuration
Environment variables in `server/.env`:

```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:3000
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- JWT authentication for admin access
- Input validation and sanitization
- CORS configuration
- Helmet.js security headers
- File upload restrictions
- Rate limiting (can be added)

## 📊 Admin Panel Features

### Content Management
- Hero section content
- Services and pricing
- Testimonials
- Blog posts and resources
- Outreach projects
- Contact information

### Form Management
- Contact form submissions
- Mentorship applications
- Volunteer applications
- Newsletter subscriptions
- Submission statistics

### File Management
- Image uploads
- Document uploads
- File organization
- File deletion

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting platform

### Backend Deployment (Heroku/DigitalOcean)
1. Set environment variables
2. Deploy the `server` folder
3. Configure database (if using one)

### Environment Variables for Production
```env
PORT=5000
NODE_ENV=production
JWT_SECRET=your-production-secret-key
CORS_ORIGIN=https://yourdomain.com
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Content Management
- `GET /api/content` - Get all content
- `PUT /api/content/hero` - Update hero section
- `PUT /api/content/services` - Update services
- `PUT /api/content/testimonials` - Update testimonials

### Forms
- `POST /api/forms/contact` - Submit contact form
- `POST /api/forms/mentorship` - Submit mentorship application
- `POST /api/forms/volunteer` - Submit volunteer application
- `POST /api/forms/newsletter` - Newsletter subscription

### File Uploads
- `POST /api/uploads/single` - Upload single file
- `POST /api/uploads/multiple` - Upload multiple files
- `GET /api/uploads/files` - Get all files

## 🛠️ Development

### Available Scripts
```bash
# Frontend
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App

# Backend
npm run server     # Start backend server
npm run dev        # Start with nodemon

# Both
npm run dev        # Start both frontend and backend
```

### Code Style
- ESLint configuration included
- Prettier formatting
- Consistent component structure
- Proper error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Project Clay team for the vision and mission
- Unsplash for beautiful stock photos
- React and Node.js communities
- All contributors and supporters

## 📞 Support

For support or questions:
- Email: info@theprojectclay.com
- Website: https://theprojectclay.com

---

**Project Clay** - Molding Lives Through Faith
*"Yet you, Lord, are our Father. We are the clay, you are the potter; we are all the work of your hand." - Isaiah 64:8*
