import React from 'react';
import TextArea from '../components/TextArea';
import './formsteps.css';

function CareerGrowth({ formData, handleInputChange }) {
    return (
        <div className="form-steps-container">
            <div className="form-steps-content">
                <h3>4. Career Growth and Development</h3>
                <TextArea 
                    name="trainingOpportunities" 
                    label="Training and development opportunities" 
                    onChange={handleInputChange} 
                    value={formData.trainingOpportunities || ''}
                    required 
                />
                <TextArea 
                    name="careerPath" 
                    label="Potential career path within the company" 
                    onChange={handleInputChange} 
                    value={formData.careerPath || ''}
                    required 
                />
                <TextArea 
                    name="mentorshipPrograms" 
                    label="Mentorship programs or support" 
                    onChange={handleInputChange} 
                    value={formData.mentorshipPrograms || ''}
                    required 
                />
            </div>
        </div>
    );
}

export default CareerGrowth;