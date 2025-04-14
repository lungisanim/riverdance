import React, { Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  setView: Dispatch<SetStateAction<'questions' | 'repositories'>>;
  style?: React.CSSProperties;
}

type SectionName = 'navigation';

const Sidebar: React.FC<SidebarProps> = ({ setView, style }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    navigation: true
  });

  if (!isVisible) {
    return (
      <div className="sidebar-toggle" onClick={() => setIsVisible(true)} style={{ padding: '10px', cursor: 'pointer' }}>
        ☰
      </div>
    );
  }

  const toggleSection = (section: SectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div style={{ width: '200px', padding: '20px', background: '#f0f0f0', ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3>Navigation</h3>
        <button 
          onClick={() => setIsVisible(false)} 
          style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}
        >
          ✕
        </button>
      </div>
      
      <div className="accordion-section">
        <div 
          className="accordion-header" 
          onClick={() => toggleSection('navigation')}
          style={{ cursor: 'pointer', padding: '8px 0', display: 'flex', justifyContent: 'space-between' }}
        >
          <span>Menu</span>
          <span>{expandedSections.navigation ? '▼' : '▶'}</span>
        </div>
        
        {expandedSections.navigation && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link to="questions" onClick={() => setView('questions')}>Questions Page</Link>
            </li>
            <li>
              <Link to="repositories" onClick={() => setView('repositories')}>Repositories Page</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
