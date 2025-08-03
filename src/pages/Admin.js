import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSettings, FiEdit, FiPlus, FiTrash2, FiSave, FiX, FiImage, FiFileText } from 'react-icons/fi';

const AdminContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: ${props => props.theme.colors.cream};
`;

const AdminHeader = styled.header`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg} 0;
  box-shadow: ${props => props.theme.shadows.sm};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const AdminTitle = styled.h1`
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  margin: 0;
`;

const AdminContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const AdminGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const AdminCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.lg};
  
  h3 {
    color: ${props => props.theme.colors.secondary};
    margin: 0;
  }
  
  .icon {
    width: 40px;
    height: 40px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.white};
  }
`;

const CardContent = styled.div`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

const CardActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  font-size: ${props => props.theme.fontSizes.sm};
  
  &.primary {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
  
  &.secondary {
    background: transparent;
    color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.secondary};
    
    &:hover {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.white};
    }
  }
  
  &.danger {
    background: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.white};
    
    &:hover {
      background: #dc2626;
    }
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${props => props.theme.spacing.md};
`;

const ModalContent = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['2xl']};
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.lg};
  
  h2 {
    color: ${props => props.theme.colors.secondary};
    margin: 0;
  }
  
  button {
    background: none;
    border: none;
    font-size: ${props => props.theme.fontSizes.xl};
    cursor: pointer;
    color: ${props => props.theme.colors.textLight};
    
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
  
  label {
    display: block;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.secondary};
    font-weight: ${props => props.theme.fontWeights.medium};
  }
  
  input, textarea, select {
    width: 100%;
    padding: ${props => props.theme.spacing.md};
    border: 2px solid ${props => props.theme.colors.cream};
    border-radius: ${props => props.theme.borderRadius.md};
    font-size: ${props => props.theme.fontSizes.base};
    transition: border-color ${props => props.theme.transitions.fast};
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${props => props.theme.spacing.lg};
`;

const Admin = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({});

  const adminSections = [
    {
      id: 'hero',
      title: 'Hero Section',
      icon: <FiImage />,
      description: 'Manage the main hero section content, including title, subtitle, and background image.',
      fields: [
        { name: 'title', label: 'Hero Title', type: 'text' },
        { name: 'subtitle', label: 'Hero Subtitle', type: 'textarea' },
        { name: 'backgroundImage', label: 'Background Image URL', type: 'text' }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      icon: <FiSettings />,
      description: 'Add, edit, or remove therapy and coaching services offered.',
      fields: [
        { name: 'title', label: 'Service Title', type: 'text' },
        { name: 'description', label: 'Service Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'text' },
        { name: 'duration', label: 'Duration', type: 'text' }
      ]
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      icon: <FiFileText />,
      description: 'Manage client testimonials and reviews displayed on the website.',
      fields: [
        { name: 'author', label: 'Author Name', type: 'text' },
        { name: 'text', label: 'Testimonial Text', type: 'textarea' },
        { name: 'rating', label: 'Rating', type: 'select', options: ['5', '4', '3', '2', '1'] }
      ]
    },
    {
      id: 'blog',
      title: 'Blog Posts',
      icon: <FiFileText />,
      description: 'Create and manage blog posts, devotionals, and resources.',
      fields: [
        { name: 'title', label: 'Post Title', type: 'text' },
        { name: 'excerpt', label: 'Post Excerpt', type: 'textarea' },
        { name: 'content', label: 'Post Content', type: 'textarea' },
        { name: 'category', label: 'Category', type: 'select', options: ['Marriage', 'Parenting', 'Identity', 'Faith', 'Healing', 'Mental Health'] },
        { name: 'tags', label: 'Tags (comma separated)', type: 'text' }
      ]
    },
    {
      id: 'outreach',
      title: 'Community Outreach',
      icon: <FiSettings />,
      description: 'Manage outreach projects, statistics, and donation options.',
      fields: [
        { name: 'title', label: 'Project Title', type: 'text' },
        { name: 'description', label: 'Project Description', type: 'textarea' },
        { name: 'stats', label: 'Statistics (JSON format)', type: 'textarea' }
      ]
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: <FiSettings />,
      description: 'Update contact details, social media links, and office information.',
      fields: [
        { name: 'email', label: 'Email Address', type: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'text' },
        { name: 'address', label: 'Office Address', type: 'textarea' },
        { name: 'socialMedia', label: 'Social Media Links (JSON format)', type: 'textarea' }
      ]
    }
  ];

  const handleEdit = (section) => {
    setActiveModal(section);
    setFormData({});
  };

  const handleSave = () => {
    // Handle saving data to backend
    console.log('Saving data:', formData);
    setActiveModal(null);
    setFormData({});
  };

  const handleCancel = () => {
    setActiveModal(null);
    setFormData({});
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AdminContainer>
      <AdminHeader>
        <div className="container">
          <AdminTitle>Admin Dashboard</AdminTitle>
        </div>
      </AdminHeader>

      <AdminContent>
        <AdminGrid>
          {adminSections.map((section, index) => (
            <AdminCard
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardHeader>
                <h3>{section.title}</h3>
                <div className="icon">{section.icon}</div>
              </CardHeader>
              <CardContent>
                {section.description}
              </CardContent>
              <CardActions>
                <ActionButton className="primary" onClick={() => handleEdit(section)}>
                  <FiEdit />
                  Edit
                </ActionButton>
                <ActionButton className="secondary">
                  <FiPlus />
                  Add New
                </ActionButton>
                <ActionButton className="danger">
                  <FiTrash2 />
                  Delete
                </ActionButton>
              </CardActions>
            </AdminCard>
          ))}
        </AdminGrid>
      </AdminContent>

      {activeModal && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContent>
            <ModalHeader>
              <h2>Edit {activeModal.title}</h2>
              <button onClick={handleCancel}>
                <FiX />
              </button>
            </ModalHeader>
            
            {activeModal.fields.map((field, index) => (
              <FormGroup key={index}>
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                  />
                ) : field.type === 'select' ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                  />
                )}
              </FormGroup>
            ))}
            
            <ModalActions>
              <ActionButton className="secondary" onClick={handleCancel}>
                <FiX />
                Cancel
              </ActionButton>
              <ActionButton className="primary" onClick={handleSave}>
                <FiSave />
                Save Changes
              </ActionButton>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}
    </AdminContainer>
  );
};

export default Admin; 