import React from 'react';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import './formsteps.css';

function WorkEnvironment({ formData, handleInputChange }) {
    return (
        <div className="form-steps-container">
            <div className="form-steps-content">
        
            <h3>6. Work Environment</h3>
            <Select 
                name="workSchedule" 
                label="Work schedule and flexibility options" 
                options={['9-5', 'Flexible hours', 'Shift work']}
                onChange={handleInputChange} 
                value={formData.workSchedule || ''}
                required 
            />
            <Select 
                name="remoteWork" 
                label="Remote work possibilities" 
                options={['Full remote', 'Hybrid', 'On-site only']}
                onChange={handleInputChange} 
                value={formData.remoteWork || ''}
                required 
            />
            <TextArea 
                name="officeAmenities" 
                label="Office amenities and facilities" 
                onChange={handleInputChange} 
                value={formData.officeAmenities || ''}
                required 
            />
            </div>
        </div>
    );
}

export default WorkEnvironment;