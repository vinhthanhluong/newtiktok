import { useState } from 'react';
import clsx from 'clsx';

import Button from '~/components/Button';
import styles from './LoginUserDeafult.module.scss';
import { EyeCloseIcon, EyeOpenIcon } from '~/assets/icon';
// import icon from '~/assets/icon';

function LoginUserDeafult() {
    const [showPassword, setShowPassword] = useState(false);
    const [typePassword, setTypePassword] = useState('password');
    const handleIconPassword = () => {
        setShowPassword(showPassword === true ? false : true);
        setTypePassword(typePassword === 'text' ? 'password' : 'text');
    };

    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.title)}>Đăng nhập</p>
            <div className={clsx(styles.formAuth)}>
                <p className={clsx(styles.formAuthLabel)}>Email hoặc TikTok ID</p>
                <div className={clsx(styles.formAuthRow)}>
                    <input type="email" className={clsx(styles.formAuthInput)} placeholder="Email" />
                </div>
                <div className={clsx(styles.formAuthRow)}>
                    <input type={typePassword} className={clsx(styles.formAuthInput)} placeholder="Mật khẩu" />
                    <p className={clsx(styles.formAuthIcon)} onClick={handleIconPassword}>
                        {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
                    </p>
                </div>
                <p className={clsx(styles.formAuthForget)}>Quên mật khẩu?</p>
                <Button primary className={clsx(styles.formAuthBtn)}>
                    Đăng nhập
                </Button>
            </div>
        </div>
    );
}

export default LoginUserDeafult;
