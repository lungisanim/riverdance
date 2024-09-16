import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import RoleResponsibilities from '../formSteps/RoleResponsibilities';
import ProjectDetails from '../formSteps/ProjectDetails';
import CompanyInformation from '../formSteps/CompanyInformation';
import CareerGrowth from '../formSteps/CareerGrowth';
import CompensationBenefits from '../formSteps/CompensationBenefits';
import WorkEnvironment from '../formSteps/WorkEnvironment';
import RecruitmentProcess from '../formSteps/RecruitmentProcess';
import TeamDynamics from '../formSteps/TeamDynamics';
import CompanyStability from '../formSteps/CompanyStability';
import LocationLogistics from '../formSteps/LocationLogistics';
import FileUpload from '../formSteps/FileUpload';
import { db } from '../firebase';
import './UserInfoPage.css';

function UserInfoPage({ userInfo }) {
    const [formData, setFormData] = useState({});
    const [currentStep, setCurrentStep] = useState(1);
    const [file, setFile] = useState(null); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let fileUrl = '';
            if (file) {
                const storage = getStorage();
                const storageRef = ref(storage, `applications/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);
                await uploadTask;
                fileUrl = await getDownloadURL(storageRef);
            }

            const applicationData = {
                ...formData,
                specUrl: fileUrl,
                timestamp: new Date()
            };

            const docRef = await addDoc(collection(db, "applications"), applicationData);
            console.log("Document written with ID: ", docRef.id);
            alert("Successfully submitted!");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred. Please try again.");
        }
    };

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    const renderStep = () => {
        const steps = [
            RoleResponsibilities,
            ProjectDetails,
            CompanyInformation,
            CareerGrowth,
            CompensationBenefits,
            WorkEnvironment,
            RecruitmentProcess,
            TeamDynamics,
            CompanyStability,
            LocationLogistics,
            FileUpload
        ];
        const StepComponent = steps[currentStep - 1];
        return <StepComponent formData={formData} handleInputChange={handleInputChange} handleFileChange={handleFileChange} />;
    };

    return (
        <div className="app-user-info">
            <h2>Application Information</h2>
            <form onSubmit={handleSubmit}>
                {renderStep()}
                <div className="navigation-buttons right-aligned">
                    {currentStep > 1 && <button type="button" onClick={prevStep}>Previous</button>}
                    {currentStep < 11 && <button type="button" onClick={nextStep}>Next</button>}
                    {currentStep === 11 && <button type="submit">Submit</button>}
                </div>
            </form>
        </div>
    );
}

export default UserInfoPage;
