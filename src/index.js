import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

import '~/global.scss';
import { AuthProvider, NotifyProvider } from '~/components/Stone';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <GoogleOAuthProvider clientId="268930622553-1jgto3qi5o8k8cntoq7jcrad48ulgimm.apps.googleusercontent.com">
        <NotifyProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </NotifyProvider>
    </GoogleOAuthProvider>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
