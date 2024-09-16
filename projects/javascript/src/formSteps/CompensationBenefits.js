import React from 'react';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import './formsteps.css';

function CompensationBenefits({ formData, handleInputChange }) {
    return (
        <div className="form-steps-container">
            <div className="form-steps-content">
            <h3>5. Compensation and Benefits</h3>
            <TextInput 
                name="salary" 
                label="Salary range" 
                type="text"
                onChange={handleInputChange} 
                value={formData.salary || ''}
                required 
            />
            <TextArea 
                name="bonusStructure" 
                label="Bonus structure or performance incentives" 
                onChange={handleInputChange} 
                value={formData.bonusStructure || ''}
                required 
            />
            <TextArea 
                name="benefits" 
                label="Health insurance, retirement plans, and other benefits" 
                onChange={handleInputChange} 
                value={formData.benefits || ''}
                required 
            />
            </div>
        </div>
    );
}

export default CompensationBenefits;