import React from 'react';
import TextArea from '../components/TextArea';
import './formsteps.css';

function TeamDynamics({ formData, handleInputChange }) {
    return (
        <div className="form-steps-container">
            <div className="form-steps-content">

            <h3>8. Team Dynamics</h3>
            <TextArea 
                name="teamSize" 
                label="Size and composition of the immediate team" 
                onChange={handleInputChange} 
                value={formData.teamSize || ''}
                required 
            />
            <TextArea 
                name="communicationStyle" 
                label="Communication style and frequency" 
                onChange={handleInputChange} 
                value={formData.communicationStyle || ''}
                required 
            />
            <TextArea 
                name="collaborationTools" 
                label="Collaboration tools and methodologies used" 
                onChange={handleInputChange} 
                value={formData.collaborationTools || ''}
                required 
            />
            </div>
        </div>
    );
}

export default TeamDynamics;