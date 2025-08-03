const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create subdirectories based on file type
    let uploadPath = uploadsDir;
    
    if (file.mimetype.startsWith('image/')) {
      uploadPath = path.join(uploadsDir, 'images');
    } else if (file.mimetype.includes('pdf') || file.mimetype.includes('document')) {
      uploadPath = path.join(uploadsDir, 'documents');
    } else {
      uploadPath = path.join(uploadsDir, 'misc');
    }
    
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${name}-${uniqueSuffix}${ext}`);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  // Allow images, PDFs, and common document types
  const allowedTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images, PDFs, and documents are allowed.'), false);
  }
};

// Configure multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Upload single file
router.post('/single', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    
    res.json({
      message: 'File uploaded successfully',
      file: {
        originalName: req.file.originalname,
        filename: req.file.filename,
        mimetype: req.file.mimetype,
        size: req.file.size,
        url: fileUrl
      }
    });
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Upload multiple files
router.post('/multiple', upload.array('files', 10), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploadedFiles = req.files.map(file => ({
      originalName: file.originalname,
      filename: file.filename,
      mimetype: file.mimetype,
      size: file.size,
      url: `/uploads/${file.filename}`
    }));

    res.json({
      message: `${uploadedFiles.length} files uploaded successfully`,
      files: uploadedFiles
    });
  } catch (error) {
    console.error('Multiple file upload error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all uploaded files
router.get('/files', (req, res) => {
  try {
    const files = [];
    
    const scanDirectory = (dir, basePath = '') => {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath, path.join(basePath, item));
        } else {
          files.push({
            name: item,
            path: path.join(basePath, item),
            size: stat.size,
            modified: stat.mtime,
            url: `/uploads/${path.join(basePath, item)}`
          });
        }
      });
    };
    
    scanDirectory(uploadsDir);
    
    res.json({ files });
  } catch (error) {
    console.error('Get files error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete file
router.delete('/files/:filename', (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(uploadsDir, filename);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    fs.unlinkSync(filePath);
    
    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete file error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get file info
router.get('/files/:filename', (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(uploadsDir, filename);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    const stat = fs.statSync(filePath);
    
    res.json({
      name: filename,
      size: stat.size,
      modified: stat.mtime,
      url: `/uploads/${filename}`
    });
  } catch (error) {
    console.error('Get file info error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Error handling middleware for multer
router.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Maximum size is 5MB.' });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ error: 'Too many files. Maximum is 10 files.' });
    }
    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({ error: 'Unexpected file field.' });
    }
  }
  
  if (error.message.includes('Invalid file type')) {
    return res.status(400).json({ error: error.message });
  }
  
  console.error('Upload error:', error);
  res.status(500).json({ error: 'Server error' });
});

module.exports = router; 