const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock data storage (in production, this would be a database)
let contentData = {
  hero: {
    title: 'Molding Lives Through Faith',
    subtitle: 'Project Clay is a Christ-centered initiative dedicated to molding women and families into all God has called them to be. Rooted in Isaiah 64:8, we provide therapy, coaching, mentorship, and community outreach services.',
    backgroundImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80'
  },
  services: [
    {
      id: 1,
      title: 'Individual Therapy',
      description: 'One-on-one counseling sessions tailored to your specific needs and challenges.',
      features: ['Personalized treatment plans', 'Faith-based approach', 'Confidential sessions', 'Flexible scheduling'],
      price: '$150/session',
      duration: '50 minutes'
    },
    {
      id: 2,
      title: 'Couples Counseling',
      description: 'Professional guidance to strengthen relationships and improve communication.',
      features: ['Relationship assessment', 'Communication skills', 'Conflict resolution', 'Marriage enrichment'],
      price: '$200/session',
      duration: '75 minutes'
    },
    {
      id: 3,
      title: 'Life Coaching',
      description: 'Goal-oriented coaching to help you achieve personal and professional success.',
      features: ['Goal setting & planning', 'Accountability support', 'Personal development', 'Career guidance'],
      price: '$120/session',
      duration: '45 minutes'
    }
  ],
  testimonials: [
    {
      id: 1,
      text: "Project Clay has been a lifeline for me. The therapy sessions helped me find peace and purpose in my journey.",
      author: "Sarah M.",
      rating: 5
    },
    {
      id: 2,
      text: "The mentorship program transformed my marriage. I'm so grateful for the wisdom and guidance I received.",
      author: "Jennifer L.",
      rating: 5
    },
    {
      id: 3,
      text: "Through Project Clay's community outreach, I found hope and support when I needed it most.",
      author: "Maria R.",
      rating: 5
    }
  ],
  outreach: [
    {
      id: 1,
      title: 'Food Drives',
      description: 'Providing nutritious meals to families in need through regular food drives and partnerships with local organizations.',
      stats: { families: '500+', meals: '2000+', volunteers: '50+' }
    },
    {
      id: 2,
      title: 'Free Counseling',
      description: 'Offering free mental health counseling sessions to individuals who cannot afford professional therapy services.',
      stats: { sessions: '300+', clients: '150+', hours: '600+' }
    },
    {
      id: 3,
      title: 'Educational Support',
      description: 'Providing educational resources, tutoring, and school supplies to children from low-income families.',
      stats: { children: '200+', supplies: '1000+', tutors: '25+' }
    },
    {
      id: 4,
      title: 'Clothing Donations',
      description: 'Collecting and distributing clothing, shoes, and essential items to families and individuals in need.',
      stats: { items: '5000+', families: '300+', drives: '12' }
    }
  ],
  contact: {
    email: 'info@theprojectclay.com',
    phone: '+234 123 456 7890',
    address: 'Lagos, Nigeria',
    socialMedia: {
      facebook: 'https://facebook.com/projectclay',
      instagram: 'https://instagram.com/projectclay',
      twitter: 'https://twitter.com/projectclay',
      youtube: 'https://youtube.com/projectclay'
    }
  }
};

// Get all content
router.get('/', (req, res) => {
  res.json(contentData);
});

// Get specific content section
router.get('/:section', (req, res) => {
  const { section } = req.params;
  
  if (!contentData[section]) {
    return res.status(404).json({ error: 'Content section not found' });
  }
  
  res.json(contentData[section]);
});

// Update hero section
router.put('/hero', [
  body('title').notEmpty().trim(),
  body('subtitle').notEmpty().trim(),
  body('backgroundImage').optional().isURL()
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, subtitle, backgroundImage } = req.body;
    
    contentData.hero = {
      title,
      subtitle,
      backgroundImage: backgroundImage || contentData.hero.backgroundImage
    };

    res.json({ message: 'Hero section updated successfully', data: contentData.hero });
  } catch (error) {
    console.error('Update hero error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update services
router.put('/services', [
  body('services').isArray(),
  body('services.*.title').notEmpty().trim(),
  body('services.*.description').notEmpty().trim(),
  body('services.*.price').notEmpty().trim(),
  body('services.*.duration').notEmpty().trim()
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { services } = req.body;
    
    // Add IDs to new services
    const updatedServices = services.map((service, index) => ({
      ...service,
      id: service.id || index + 1,
      features: service.features || []
    }));

    contentData.services = updatedServices;

    res.json({ message: 'Services updated successfully', data: contentData.services });
  } catch (error) {
    console.error('Update services error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add new service
router.post('/services', [
  body('title').notEmpty().trim(),
  body('description').notEmpty().trim(),
  body('price').notEmpty().trim(),
  body('duration').notEmpty().trim()
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newService = {
      id: Date.now(),
      ...req.body,
      features: req.body.features || []
    };

    contentData.services.push(newService);

    res.status(201).json({ message: 'Service added successfully', data: newService });
  } catch (error) {
    console.error('Add service error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete service
router.delete('/services/:id', (req, res) => {
  try {
    const { id } = req.params;
    const serviceId = parseInt(id);

    const serviceIndex = contentData.services.findIndex(service => service.id === serviceId);
    
    if (serviceIndex === -1) {
      return res.status(404).json({ error: 'Service not found' });
    }

    contentData.services.splice(serviceIndex, 1);

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update testimonials
router.put('/testimonials', [
  body('testimonials').isArray(),
  body('testimonials.*.text').notEmpty().trim(),
  body('testimonials.*.author').notEmpty().trim(),
  body('testimonials.*.rating').isInt({ min: 1, max: 5 })
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { testimonials } = req.body;
    
    // Add IDs to new testimonials
    const updatedTestimonials = testimonials.map((testimonial, index) => ({
      ...testimonial,
      id: testimonial.id || index + 1
    }));

    contentData.testimonials = updatedTestimonials;

    res.json({ message: 'Testimonials updated successfully', data: contentData.testimonials });
  } catch (error) {
    console.error('Update testimonials error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add new testimonial
router.post('/testimonials', [
  body('text').notEmpty().trim(),
  body('author').notEmpty().trim(),
  body('rating').isInt({ min: 1, max: 5 })
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newTestimonial = {
      id: Date.now(),
      ...req.body
    };

    contentData.testimonials.push(newTestimonial);

    res.status(201).json({ message: 'Testimonial added successfully', data: newTestimonial });
  } catch (error) {
    console.error('Add testimonial error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update outreach projects
router.put('/outreach', [
  body('outreach').isArray(),
  body('outreach.*.title').notEmpty().trim(),
  body('outreach.*.description').notEmpty().trim()
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { outreach } = req.body;
    
    // Add IDs to new projects
    const updatedOutreach = outreach.map((project, index) => ({
      ...project,
      id: project.id || index + 1,
      stats: project.stats || {}
    }));

    contentData.outreach = updatedOutreach;

    res.json({ message: 'Outreach projects updated successfully', data: contentData.outreach });
  } catch (error) {
    console.error('Update outreach error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update contact information
router.put('/contact', [
  body('email').isEmail().normalizeEmail(),
  body('phone').notEmpty().trim(),
  body('address').notEmpty().trim()
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, phone, address, socialMedia } = req.body;
    
    contentData.contact = {
      email,
      phone,
      address,
      socialMedia: socialMedia || contentData.contact.socialMedia
    };

    res.json({ message: 'Contact information updated successfully', data: contentData.contact });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 