import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
interface Term {
  id: number;
  section_title: string;
  content: string;
  created_at: string; 
}


interface TermsPageProps {
  onAccept: () => void;
  onReject: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onAccept, onReject }) => {
  const navigate = useNavigate();
  const [terms, setTerms] = useState<Term[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTerms = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/terms.json'); 
        if (!response.ok) {
           if (response.status === 404) {
             throw new Error("Terms file not found. Please ensure the build process completed successfully.");
           }
           throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Term[] = await response.json();
        setTerms(data);
      } catch (err: any) { 
        console.error("Failed to fetch terms:", err);
        setError(err.message || "Could not load terms and conditions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []); 

  return (
    <div className="terms-page" style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Terms and Conditions</h1>

      {loading && <p>Loading terms...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <div className="terms-content" style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
          {terms.length > 0 ? (
            terms.map((term) => (
              <div key={term.id} style={{ marginBottom: '15px' }}>
                <h3 style={{ marginTop: 0 }}>{term.section_title}</h3>
                <p style={{ whiteSpace: 'pre-wrap' }}>{term.content}</p>
              </div>
            ))
          ) : (
            <p>No terms and conditions available.</p>
          )}
        </div>
      )}

      <div className="button-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={() => {
            onAccept();
            navigate('/questions', { replace: true });
          }}
          disabled={loading || !!error || terms.length === 0}
        >
          Accept
        </button>
        <button
          onClick={() => {
            onReject();
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default TermsPage;
