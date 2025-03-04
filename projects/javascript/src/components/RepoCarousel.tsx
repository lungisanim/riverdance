import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './RepoCarousel.css';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  clone_url: string;
}

const RepoCarousel: React.FC<{ repos: Repository[] }> = ({ repos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRepo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % repos.length);
  };

  const prevRepo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + repos.length) % repos.length);
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  if (repos.length === 0) return <p>No repositories available.</p>;

  const currentRepo = repos[currentIndex];

  return (
    <div className="repo-carousel">
      <button className="nav-btn" onClick={prevRepo}>&lt; Previous</button>

      <Card className="repo-card">
        <Card.Body>
          <Card.Title className="repo-title">{currentRepo.name}</Card.Title>
          <Card.Text className="repo-description">{currentRepo.description}</Card.Text>
          <Card.Text className="repo-language">{currentRepo.language}</Card.Text>
          <div className="btn-group">
            <Button variant="primary" href={currentRepo.clone_url} target="_blank" rel="noopener noreferrer">
              git clone link
            </Button>
            <Button variant="secondary" onClick={() => copyToClipboard(currentRepo.clone_url)}>
              Copy Link
            </Button>
          </div>
        </Card.Body>
      </Card>

      <button className="nav-btn" onClick={nextRepo}>Next &gt;</button>
    </div>
  );
};

export default RepoCarousel; 