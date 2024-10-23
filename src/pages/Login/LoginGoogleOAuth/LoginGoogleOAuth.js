import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
const clientId = '268930622553-1jgto3qi5o8k8cntoq7jcrad48ulgimm.apps.googleusercontent.com';

function LoginGoogleOAuth() {
    const onSuccess = (credentialResponse) => {
        const user = credentialResponse.credential;
        console.log('Login Success:', user);
        // Xử lý thông tin người dùng sau khi đăng nhập thành công
    };

    const onFailure = (error) => {
        console.error('Login Failed:', error);
        // Xử lý lỗi khi đăng nhập
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div>
                <h1>Chào Mừng Đến Với Ứng Dụng Của Chúng Tôi!</h1>
                <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} style={{ marginTop: '20px' }} />
            </div>
        </GoogleOAuthProvider>
    );
}

export default LoginGoogleOAuth;
