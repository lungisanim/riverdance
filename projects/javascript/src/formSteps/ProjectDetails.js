import React from 'react';
import TextArea from '../components/TextArea';
import './formsteps.css';

function ProjectDetails({ formData, handleInputChange }) {
    return (
        <div className="form-steps-container">
            <div className="form-steps-content">
            <h3>2. Project Details</h3>
            <TextArea 
                name="currentProjects" 
                label="Current projects and initiatives" 
                onChange={handleInputChange} 
                value={formData.currentProjects || ''}
                required 
            />
            <TextArea 
                name="projectGoals" 
                label="Project goals and timelines" 
                onChange={handleInputChange} 
                value={formData.projectGoals || ''}
                required 
            />
            <TextArea 
                name="challengesOpportunities" 
                label="Potential challenges and opportunities" 
                onChange={handleInputChange} 
                value={formData.challengesOpportunities || ''}
                required 
            />
            </div>
        </div>
    );
}

export default ProjectDetails;