import React from 'react';
import TermsCard from '../components/TermsCard';

function TermsPage({ onAccept, onReject }) {
    return (
        <div className="app-terms">
            <TermsCard onAccept={onAccept} onReject={onReject} />
        </div>
    );
}

export default TermsPage;
