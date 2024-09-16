import React from 'react';
import TextArea from '../components/TextArea';
import './formsteps.css';

function RoleResponsibilities({ formData, handleInputChange }) {
    return (
        <div className="form-steps-container">
            <div className="form-steps-content">
            <h3>1. Role and Responsibilities</h3>
            <TextArea 
                name="jobDescription" 
                label="Detailed job description, including day-to-day tasks" 
                onChange={handleInputChange} 
                value={formData.jobDescription || ''}
                required 
            />
            <TextArea 
                name="technologies" 
                label="Specific technologies, languages, and frameworks i'll be working with" 
                onChange={handleInputChange} 
                value={formData.technologies || ''}
                required 
            />
            <TextArea 
                name="expectedOutcomes" 
                label="Expected outcomes and key performance indicators (KPIs)" 
                onChange={handleInputChange} 
                value={formData.expectedOutcomes || ''}
                required 
            />
            <TextArea 
                name="teamStructure" 
                label="Team structure and your role within the team" 
                onChange={handleInputChange} 
                value={formData.teamStructure || ''}
                required 
            />
            </div>
        </div>
    );
}

export default RoleResponsibilities;