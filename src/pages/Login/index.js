import clsx from 'clsx';

import styles from './login.module.scss';
import {
    QRIcon,
    UserIcon,
    FacebookIcon,
    GoogleIcon,
    TwitterIcon,
    LineIcon,
    KakaoTalkIcon,
    AppleIcon,
} from '~/assets/icon';
import LoginGoogle from './LoginGoogle';
import LoginGoogleOAuth from './LoginGoogleOAuth';

function Login() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.content)}>
                <p className={clsx(styles.title)}>Đặt nhập vào TikTok</p>
                <ul className={clsx(styles.listBtn)}>
                    <li>
                        <a href="#">
                            <span className={clsx(styles.listBtnIcon)}>
                                <QRIcon />
                            </span>
                            <span className={clsx(styles.listBtnTitle)}>Sử dụng mã QR</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={clsx(styles.listBtnIcon)}>
                                <UserIcon />
                            </span>
                            <span className={clsx(styles.listBtnTitle)}>Số điện thoại / Email / TikTok ID</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={clsx(styles.listBtnIcon)}>
                                <FacebookIcon />
                            </span>
                            <span className={clsx(styles.listBtnTitle)}>Tiếp tục với Facebook</span>
                        </a>
                    </li>
                    <li>
                        {/* <a href="#">
                            <span className={clsx(styles.listBtnIcon)}>
                                <GoogleIcon />
                            </span>
                            <span className={clsx(styles.listBtnTitle)}>Tiếp tục với Google </span>
                        </a> */}
                        {/* <LoginGoogle /> */}
                        <LoginGoogleOAuth />
                    </li>
                    <li>
                        <a href="#">
                            <span className={clsx(styles.listBtnIcon)}>
                                <TwitterIcon />
                            </span>
                            <span className={clsx(styles.listBtnTitle)}>Tiếp tục với Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={clsx(styles.listBtnIcon)}>
                                <LineIcon />
                            </span>
                            <span className={clsx(styles.listBtnTitle)}>Tiếp tục với LINE</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={clsx(styles.listBtnIcon)}>
                                <KakaoTalkIcon />
                            </span>
                            <span className={clsx(styles.listBtnTitle)}>Tiếp tục với KakaoTalk</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={clsx(styles.listBtnIcon)}>
                                <AppleIcon />
                            </span>
                            <span className={clsx(styles.listBtnTitle)}>Tiếp tục với Apple</span>
                        </a>
                    </li>
                </ul>
                <div className={clsx(styles.note)}>
                    Bằng việc tiếp tục với tài khoản có vị trí tại Vietnam, bạn đồng ý với Điều khoản dịch vụ, đồng thời
                    xác nhận rằng bạn đã đọc Chính sách quyền riêng tư của chúng tôi.
                </div>
            </div>
            <div className={clsx(styles.footer)}>
                Bạn không có tài khoản? <a className={clsx(styles.act)}>Đăng ký</a>
            </div>
        </div>
    );
}

export default Login;
