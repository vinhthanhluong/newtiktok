import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '268930622553-1jgto3qi5o8k8cntoq7jcrad48ulgimm.apps.googleusercontent.com';

function LoginGoogle({ myProp = 'default value' }) {
    const onSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
    };

    const onFailure = (res) => {
        console.error('Login failed:', res);
        // Hiển thị thông báo lỗi chi tiết cho người dùng
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Tiếp tục với Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                scope="profile email" // Thêm scope nếu cần
            />
        </div>
    );
}

export default LoginGoogle;
