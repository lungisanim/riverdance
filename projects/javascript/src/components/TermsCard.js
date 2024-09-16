import React from 'react';
import './terms.css';

function TermsCard({ onAccept, onReject }) {
    return (
        <div className="terms-card-container">
            <div className="card terms-card">
                <div className="card-body">
                    <h2>Terms and Conditions</h2>
                    <p>Please read and accept our terms and conditions for Forest.</p>
                    <p>1. Acceptance of Terms: By accessing or using Forest service, you agree to be bound by these Terms and Conditions.</p>
                    <p>2. User Responsibilities: You are responsible for maintaining the confidentiality of your account and password.</p>
                    <p>3. Intellectual Property: All content on Forest is protected by copyright and other intellectual property laws.</p>
                    <p>4. User-Generated Content: By submitting content to Forest, you grant us a non-exclusive, royalty-free license to use, modify, and distribute your content.</p>
                    <p>5. Prohibited Activities: Users may not engage in any illegal activities or violate any laws while using Forest.</p>
                    <p>6. Disclaimer of Warranties: Forest is provided "as is" without any warranties, express or implied.</p>
                    <p>7. Limitation of Liability: Forest shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                    <p>8. Governing Law: These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction].</p>
                    <p>9. Termination: We reserve the right to terminate or suspend your account and access to Forest at our sole discretion.</p>
                    <p>10. Changes to Service: We reserve the right to withdraw or amend Forest service, and any service or material we provide, in our sole discretion without notice. We will not be liable if for any reason all or any part of the service is unavailable at any time or for any period.</p>
                </div>
                <div className="card-footer right-alignned-footer">
                    <button className="btn btn-primary" onClick={onAccept}>Accept</button>
                    <button className="btn btn-secondary" onClick={onReject}>Reject</button>
                </div>
            </div>
        </div>
    );
}

export default TermsCard;
