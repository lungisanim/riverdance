import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function LoginPage({ onSuccess, onError }) {
    const [text, setText] = useState('');
    const fullText = '.... create the things you want to see ...';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length - 1) {
                setText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100); 

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="app-login">
            <h2>{text}</h2>
            <GoogleLogin onSuccess={onSuccess} onError={onError} />
        </div>
    );
}

export default LoginPage;