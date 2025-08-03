const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock data storage for form submissions (in production, this would be a database)
let formSubmissions = {
  contact: [],
  mentorship: [],
  volunteer: [],
  newsletter: []
};

// Contact form validation
const contactValidation = [
  body('name').notEmpty().trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('subject').notEmpty().trim(),
  body('message').notEmpty().trim().isLength({ min: 10 })
];

// Contact form submission
router.post('/contact', contactValidation, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const submission = {
      id: Date.now(),
      ...req.body,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    formSubmissions.contact.push(submission);

    // In production, you would send an email notification here
    console.log('New contact form submission:', submission);

    res.status(201).json({ 
      message: 'Thank you for your message! We will get back to you soon.',
      submissionId: submission.id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Mentorship application validation
const mentorshipValidation = [
  body('name').notEmpty().trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('program').notEmpty().trim(),
  body('message').notEmpty().trim().isLength({ min: 20 })
];

// Mentorship application submission
router.post('/mentorship', mentorshipValidation, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const submission = {
      id: Date.now(),
      ...req.body,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    formSubmissions.mentorship.push(submission);

    // In production, you would send an email notification here
    console.log('New mentorship application:', submission);

    res.status(201).json({ 
      message: 'Thank you for your application! We will review it and contact you soon.',
      submissionId: submission.id
    });
  } catch (error) {
    console.error('Mentorship application error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Volunteer application validation
const volunteerValidation = [
  body('name').notEmpty().trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('area').notEmpty().trim(),
  body('message').notEmpty().trim().isLength({ min: 20 })
];

// Volunteer application submission
router.post('/volunteer', volunteerValidation, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const submission = {
      id: Date.now(),
      ...req.body,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    formSubmissions.volunteer.push(submission);

    // In production, you would send an email notification here
    console.log('New volunteer application:', submission);

    res.status(201).json({ 
      message: 'Thank you for your volunteer application! We will contact you soon.',
      submissionId: submission.id
    });
  } catch (error) {
    console.error('Volunteer application error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Newsletter subscription validation
const newsletterValidation = [
  body('email').isEmail().normalizeEmail()
];

// Newsletter subscription
router.post('/newsletter', newsletterValidation, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    // Check if already subscribed
    const existingSubscription = formSubmissions.newsletter.find(sub => sub.email === email);
    if (existingSubscription) {
      return res.status(400).json({ error: 'Email already subscribed to newsletter' });
    }

    const subscription = {
      id: Date.now(),
      email,
      timestamp: new Date().toISOString(),
      status: 'active'
    };

    formSubmissions.newsletter.push(subscription);

    // In production, you would integrate with MailerLite or similar service
    console.log('New newsletter subscription:', subscription);

    res.status(201).json({ 
      message: 'Thank you for subscribing to our newsletter!',
      subscriptionId: subscription.id
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all form submissions (admin only)
router.get('/submissions', (req, res) => {
  try {
    res.json({
      contact: formSubmissions.contact,
      mentorship: formSubmissions.mentorship,
      volunteer: formSubmissions.volunteer,
      newsletter: formSubmissions.newsletter
    });
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get submissions by type
router.get('/submissions/:type', (req, res) => {
  try {
    const { type } = req.params;
    
    if (!formSubmissions[type]) {
      return res.status(404).json({ error: 'Submission type not found' });
    }
    
    res.json(formSubmissions[type]);
  } catch (error) {
    console.error('Get submissions by type error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update submission status (admin only)
router.put('/submissions/:type/:id', [
  body('status').isIn(['new', 'pending', 'approved', 'rejected', 'completed'])
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { type, id } = req.params;
    const { status } = req.body;
    
    if (!formSubmissions[type]) {
      return res.status(404).json({ error: 'Submission type not found' });
    }
    
    const submission = formSubmissions[type].find(sub => sub.id === parseInt(id));
    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    
    submission.status = status;
    submission.updatedAt = new Date().toISOString();

    res.json({ message: 'Submission status updated successfully', submission });
  } catch (error) {
    console.error('Update submission status error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete submission (admin only)
router.delete('/submissions/:type/:id', (req, res) => {
  try {
    const { type, id } = req.params;
    
    if (!formSubmissions[type]) {
      return res.status(404).json({ error: 'Submission type not found' });
    }
    
    const submissionIndex = formSubmissions[type].findIndex(sub => sub.id === parseInt(id));
    if (submissionIndex === -1) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    
    formSubmissions[type].splice(submissionIndex, 1);

    res.json({ message: 'Submission deleted successfully' });
  } catch (error) {
    console.error('Delete submission error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get submission statistics
router.get('/statistics', (req, res) => {
  try {
    const stats = {
      total: {
        contact: formSubmissions.contact.length,
        mentorship: formSubmissions.mentorship.length,
        volunteer: formSubmissions.volunteer.length,
        newsletter: formSubmissions.newsletter.length
      },
      recent: {
        contact: formSubmissions.contact.filter(sub => {
          const date = new Date(sub.timestamp);
          const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          return date > weekAgo;
        }).length,
        mentorship: formSubmissions.mentorship.filter(sub => {
          const date = new Date(sub.timestamp);
          const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          return date > weekAgo;
        }).length,
        volunteer: formSubmissions.volunteer.filter(sub => {
          const date = new Date(sub.timestamp);
          const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          return date > weekAgo;
        }).length
      },
      status: {
        contact: formSubmissions.contact.reduce((acc, sub) => {
          acc[sub.status] = (acc[sub.status] || 0) + 1;
          return acc;
        }, {}),
        mentorship: formSubmissions.mentorship.reduce((acc, sub) => {
          acc[sub.status] = (acc[sub.status] || 0) + 1;
          return acc;
        }, {}),
        volunteer: formSubmissions.volunteer.reduce((acc, sub) => {
          acc[sub.status] = (acc[sub.status] || 0) + 1;
          return acc;
        }, {})
      }
    };

    res.json(stats);
  } catch (error) {
    console.error('Get statistics error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 