import React from 'react';
import FileUpload from '../components/FileUpload';
import './formsteps.css';

function CVUpload({ handleFileChange }) {
    return (
        <div className="form-steps-container">
            <div className="form-steps-content">
            <h3>11. Job Specification Upload</h3>
            <FileUpload 
                name="cv" 
                label="Upload the Job Specification" 
                accept=".pdf, .doc., .docx" 
                onChange={handleFileChange} 
                required 
            />
            </div>
        </div>
    );
}

export default CVUpload;