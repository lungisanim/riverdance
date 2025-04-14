import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from '../interfaces/UserInfo';
import TextArea from '../components/TextArea';

interface Question {
  questionid: number;
  question: string;
}

interface FormAnswer {
  questionId: number;
  answer: string;
  file?: File;
}

const QuestionsPage: React.FC<{ userInfo: UserInfo }> = ({ userInfo }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<FormAnswer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/questions.json');
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Questions file not found. Build might have failed.");
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Question[] = await response.json();
        setQuestions(data);
      } catch (err: any) {
        console.error('Error fetching questions:', err);
        setError(err.message || "Could not load questions.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (qId: number, answer: string, file?: File) => {
    setAnswers(prevAnswers => {
      const existingAnswerIndex = prevAnswers.findIndex(a => a.questionId === qId);
      if (existingAnswerIndex > -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = { questionId: qId, answer, file };
        return updatedAnswers;
      }
      return [...prevAnswers, { questionId: qId, answer, file }];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', userInfo.name);
    
    answers.forEach(answer => {
      formData.append(`answers[${answer.questionId}][text]`, answer.answer);
      if (answer.file) {
        formData.append(`answers[${answer.questionId}][file]`, answer.file);
      }
    });

    try {
      await axios.post('/api/submit-application', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to submit application');
    }
  };

  const currentQuestion = questions[currentStep];

  const handleLogout = async () => {
    if (!window.gapi?.auth2) {
      await new Promise<void>((resolve) => {
        window.gapi.load('auth2', () => resolve());
      });
    }
    const auth2 = window.gapi?.auth2.getAuthInstance();
    if (auth2) {
      await auth2.signOut();
      console.log('User logged out from Google');
    }
  };

  const renderQuestionContent = () => {
    if (loading) {
      return <p>Loading questions...</p>;
    }

    if (error) {
      return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    if (!currentQuestion) {
      return <p>No question available at this step.</p>;
    }

    const currentAnswer = answers.find(a => a.questionId === currentQuestion.questionid)?.answer || '';

    return (
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Questions</h2>
        <div className="question-container">
          <label>{currentQuestion.question}</label>
          <TextArea
            name={currentQuestion.questionid}
            label={currentQuestion.question}
            onChange={(newValue: string) => handleAnswerChange(currentQuestion.questionid, newValue)}
            required
          />
          <input 
            type="file" 
            placeholder="Enter your answer here..."
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                handleAnswerChange(
                  currentQuestion.questionid, 
                  currentAnswer, 
                  file
                );
              }
            }} 
          />
        </div>
        
        <div className="navigation-buttons">
          {currentStep > 0 && (
            <button type="button" onClick={() => setCurrentStep(prev => prev - 1)}>
              Previous
            </button>
          )}
          {currentStep < questions.length - 1 ? (
            <button type="button" onClick={() => setCurrentStep(prev => prev + 1)}>
              Next
            </button>
          ) : (
            <button type="submit">Submit Application</button>
          )}
        </div>
      </form>
    );
  };

  return (
    <div className="user-info-page" style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        {renderQuestionContent()}
      </div>
    </div>
  );
};

export default QuestionsPage;
