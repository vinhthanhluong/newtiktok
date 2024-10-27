import { useState, useContext } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import LoginBtn from '../LoginBtn';
import { GoogleIcon } from '~/assets/icon';
import { UserContext } from '../UserContext';

function LoginGoogleOAuth() {
    // const [userInfo, setUserInfo] = useState(null);
    const { setUserInfo } = useContext(UserContext);

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                    },
                });
                setUserInfo(res.data); // Lưu thông tin người dùng vào state
            } catch (error) {
                console.log(error);
            }
        },
        onError: () => {
            console.log('Login Failed'); // Xử lý khi đăng nhập thất bại
        },
    });
    return <LoginBtn icon={<GoogleIcon />} text="Tiếp tục với Google" onclick={() => login()} />;
}

export default LoginGoogleOAuth;
