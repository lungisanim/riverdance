import React from 'react';
import TextArea from '../components/TextArea';
import './formsteps.css';

function CompanyStability({ formData, handleInputChange }) {
    return (
        <div className="form-step-container">
            <div className="form-step-content">
                <h3>9. Company Stability and Growth</h3>
                <TextArea 
                    name="financialHealth" 
                    label="Company's financial health and stability" 
                    onChange={handleInputChange} 
                    value={formData.financialHealth || ''}
                    required 
                />
                <TextArea 
                    name="growthPlans" 
                    label="Future growth plans and projections" 
                    onChange={handleInputChange} 
                    value={formData.growthPlans || ''}
                    required 
                />
                <TextArea 
                    name="marketPosition" 
                    label="Market position and competitive advantage" 
                    onChange={handleInputChange} 
                    value={formData.marketPosition || ''}
                    required 
                />
            </div>
        </div>
    );
}

export default CompanyStability;