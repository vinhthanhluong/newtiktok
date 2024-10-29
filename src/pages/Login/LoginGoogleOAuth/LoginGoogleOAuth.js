import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import LoginBtn from '../LoginList/LoginBtn';
import { GoogleIcon } from '~/assets/icon';
import { UserAuth } from '~/components/Stone';

function LoginGoogleOAuth() {
    // const [userInfo, setUserInfo] = useState(null);
    const { setUserGoogle } = UserAuth();

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                    },
                });
                setUserGoogle(res.data); // Lưu thông tin người dùng vào state
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
