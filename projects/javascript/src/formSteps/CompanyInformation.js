import React from 'react';
import TextArea from '../components/TextArea';
import './formsteps.css';

function CompanyInformation({ formData, handleInputChange }) {
    return (
        <div className="form-step-container">
            <div className="form-step-content">
                <h3>3. Company Information</h3>
                <TextArea 
                    name="companyHistory" 
                    label="Company history and background" 
                    onChange={handleInputChange} 
                    value={formData.companyHistory || ''}
                    required 
                />
                <TextArea 
                    name="companyValues" 
                    label="Company values and culture" 
                    onChange={handleInputChange} 
                    value={formData.companyValues || ''}
                    required 
                />
                <TextArea 
                    name="industryPosition" 
                    label="Company's position in the industry" 
                    onChange={handleInputChange} 
                    value={formData.industryPosition || ''}
                    required 
                />
            </div>
        </div>
    );
}

export default CompanyInformation;