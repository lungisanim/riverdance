import React from 'react';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import './formsteps.css';   

function LocationLogistics({ formData, handleInputChange }) {
    return (
        <div className="form-steps-container">
            <div className="form-steps-content">
            <h3>10. Location and Logistics</h3>
            <TextInput 
                name="officeLocation" 
                label="Office location" 
                type="text"
                onChange={handleInputChange} 
                value={formData.officeLocation || ''}
                required 
            />
            <TextArea 
                name="commutingOptions" 
                label="Commuting options and parking facilities" 
                onChange={handleInputChange} 
                value={formData.commutingOptions || ''}
                required 
            />
            <TextArea 
                name="nearbyAmenities" 
                label="Nearby amenities and facilities" 
                onChange={handleInputChange} 
                value={formData.nearbyAmenities || ''}
                required 
            />
            </div>
        </div>
    );
}

export default LocationLogistics;