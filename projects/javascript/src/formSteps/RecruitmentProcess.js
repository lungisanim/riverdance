import React from 'react';
import TextArea from '../components/TextArea';
import './formsteps.css';

function RecruitmentProcess({ formData, handleInputChange }) {
    return (
        <div className="form-steps-container">
            <div className="form-steps-content">
            <h3>7. Recruitment Process</h3>
            <TextArea 
                name="interviewStages" 
                label="Interview stages and process" 
                onChange={handleInputChange} 
                value={formData.interviewStages || ''}
                required 
            />
            <TextArea 
                name="skillsAssessment" 
                label="Skills assessment or technical tests" 
                onChange={handleInputChange} 
                value={formData.skillsAssessment || ''}
                required 
            />
            <TextArea 
                name="timelineExpectations" 
                label="Timeline and expectations for decision-making" 
                onChange={handleInputChange} 
                value={formData.timelineExpectations || ''}
                required 
            />
            </div>
        </div>
    );
}

export default RecruitmentProcess;