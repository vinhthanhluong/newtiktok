import clsx from 'clsx';

import styles from './loginList.module.scss';
import { QRIcon, UserIcon, FacebookIcon } from '~/assets/icon';
import LoginGoogleOAuth from '../LoginGoogleOAuth';
import LoginBtn from './LoginBtn';
import { UserAuth } from '~/components/Stone';

function LoginList() {
    const { setLoginTab } = UserAuth();

    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.title)}>Log in to TikTok</p>
            <ul className={clsx(styles.listBtn)}>
                <LoginBtn icon={<QRIcon />} text="Use QR code" onclick={() => setLoginTab('loginQR')} />
                <LoginBtn
                    icon={<UserIcon />}
                    text="Use phone / email / username"
                    onclick={() => setLoginTab('loginEmail')}
                />
                <LoginBtn icon={<FacebookIcon />} text="Continue with Facebook" />
                <LoginGoogleOAuth />
                {/* <LoginBtn icon={<TwitterIcon />} text="Continue with Twitter" />
                <LoginBtn icon={<LineIcon />} text="Continue with LINE" />
                <LoginBtn icon={<KakaoTalkIcon />} text="Continue with KakaoTalk" />
                <LoginBtn icon={<AppleIcon />} text="Continue with Apple" /> */}
            </ul>
            <div className={clsx(styles.note)}>
                By continuing with an account located in Vietnam, you agree to our Terms of Service and acknowledge that
                you have read our Privacy Policy.
            </div>
        </div>
    );
}

export default LoginList;
