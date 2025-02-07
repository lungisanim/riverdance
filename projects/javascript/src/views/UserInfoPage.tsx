import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoggedInUserInfo from '../components/LoggedInUserInfo';

interface Question {
  id: number;
  text: string;
}

interface FormAnswer {
  questionId: number;
  answer: string;
  file?: File;
}

const UserInfoPage: React.FC<{ userInfo: { username: string, name: string, email: string, picture: string } }> = ({ userInfo }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<FormAnswer[]>([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    
    const fetchQuestions = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/questions');
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch questions', error);
        setLoading(false);
      }
    };

    console.log(userInfo);
    //fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId: number, answer: string, file?: File) => {
    setAnswers(prevAnswers => {
      const existingAnswerIndex = prevAnswers.findIndex(a => a.questionId === questionId);
      
      if (existingAnswerIndex > -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = { questionId, answer, file };
        return updatedAnswers;
      }

      return [...prevAnswers, { questionId, answer, file }];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('username', userInfo.username);
    
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
    // Wait for gapi to load if it's not already loaded
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

  return (
    <div className="user-info-page">
      <LoggedInUserInfo userInfo={userInfo} onLogout={handleLogout} />
      <h2>Questions</h2>
      {loading ? (
        <p>Loading questions...</p>
      ) : (
        currentQuestion ? (
          <form onSubmit={handleSubmit}>
            <div className="question-container">
              <label>{currentQuestion.text}</label>
              <textarea 
                onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                required
              />
              <input 
                type="file" 
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleAnswerChange(currentQuestion.id, answers.find(a => a.questionId === currentQuestion.id)?.answer || '', file);
                  }
                }} 
              />
            </div>
            
            <div className="navigation-buttons">
              {currentStep > 0 && (
                <button 
                  type="button" 
                  onClick={() => setCurrentStep(prev => prev - 1)}
                >
                  Previous
                </button>
              )}
              
              {currentStep < questions.length - 1 ? (
                <button 
                  type="button" 
                  onClick={() => setCurrentStep(prev => prev + 1)}
                >
                  Next
                </button>
              ) : (
                <button type="submit">Submit Application</button>
              )}
            </div>
          </form>
        ) : (
          <p>No questions available.</p>
        )
      )}
    </div>
  );
};

export default UserInfoPage;