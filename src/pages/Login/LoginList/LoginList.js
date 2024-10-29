import clsx from 'clsx';

import styles from './loginList.module.scss';
import { QRIcon, UserIcon, FacebookIcon, TwitterIcon, LineIcon, KakaoTalkIcon, AppleIcon } from '~/assets/icon';
import LoginGoogleOAuth from '../LoginGoogleOAuth';
import LoginBtn from './LoginBtn';
import { UserAuth } from '~/components/Stone';

function LoginList() {
    // const [loginDeafult, setLoginDeafult] = useState(false);
    const { setLoginDeafult } = UserAuth();

    const handleLoginDefault = () => {
        setLoginDeafult(true);
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.title)}>Đăng nhập vào TikTok</p>
            <ul className={clsx(styles.listBtn)}>
                <LoginBtn icon={<QRIcon />} text="Sử dụng mã QR" />
                <LoginBtn icon={<UserIcon />} text="Số điện thoại / Email / TikTok ID" onclick={handleLoginDefault} />
                <LoginBtn icon={<FacebookIcon />} text="Tiếp tục với Facebook" />
                <LoginGoogleOAuth />
                <LoginBtn icon={<TwitterIcon />} text="Tiếp tục với Twitter" />
                <LoginBtn icon={<LineIcon />} text="Tiếp tục với LINE" />
                <LoginBtn icon={<KakaoTalkIcon />} text="Tiếp tục với KakaoTalk" />
                <LoginBtn icon={<AppleIcon />} text="Tiếp tục với Apple" />
            </ul>
            <div className={clsx(styles.note)}>
                Bằng việc tiếp tục với tài khoản có vị trí tại Vietnam, bạn đồng ý với Điều khoản dịch vụ, đồng thời xác
                nhận rằng bạn đã đọc Chính sách quyền riêng tư của chúng tôi.
            </div>
        </div>
    );
}

export default LoginList;
