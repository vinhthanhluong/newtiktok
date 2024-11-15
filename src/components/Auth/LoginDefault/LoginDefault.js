import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './loginDefault.module.scss';
import { EyeCloseIcon, EyeOpenIcon } from '~/assets/icon';
import * as authLogin from '~/services/authLogin';
import { UserNotify } from '~/components/Stone';

function LoginDefault() {
    const [valueAccount, setValueAccount] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const { setInfoNotify } = UserNotify();

    const handleIconPassword = () => {
        setShowPassword(!showPassword);
    };

    // if (!valueAccount.startsWith(' ')) {
    //     setValueAccount(valueAccount);
    // }

    // if (!valuePassword.startsWith(' ')) {
    //     setValuePassword(valuePassword);
    // }

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const result = await authLogin.login(valueAccount, valuePassword);
        console.log(result.errorCode);
        if (result.errCode) {
            setInfoNotify({
                content: 'Login failed. Try again later',
                error: true,
                delay: 2000,
                isNotify: true,
            });

            console.log('error');

            setTimeout(() => {
                setIsLoading(false);
            }, 300);
        } else {
            setInfoNotify({
                content: 'Login Success',
                success: true,
                delay: 2000,
                isNotify: true,
            });

            console.log('success');

            localStorage.setItem('user-id', JSON.stringify(result.data));
            localStorage.setItem('token', JSON.stringify(result.meta.token));
            navigate('/');
            setTimeout(() => {
                setIsLoading(false);
                window.location.reload();
            }, 300);
        }
    };

    return (
        <>
            <p className={clsx(styles.title)}>Log in</p>
            <form action="/" method="POST">
                <div className={clsx(styles.formAuth)}>
                    <p className={clsx(styles.formAuthLabel)}>Email or username</p>
                    <div className={clsx(styles.formAuthRow)}>
                        <input
                            type="email"
                            className={clsx(styles.formAuthInput)}
                            placeholder="Email"
                            value={valueAccount}
                            onChange={(e) => setValueAccount(e.target.value)}
                        />
                    </div>
                    <div className={clsx(styles.formAuthRow)}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className={clsx(styles.formAuthInput)}
                            placeholder="Password"
                            value={valuePassword}
                            onChange={(e) => setValuePassword(e.target.value)}
                        />
                        <p className={clsx(styles.formAuthIcon)} onClick={handleIconPassword}>
                            {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
                        </p>
                    </div>
                    <p className={clsx(styles.formAuthForget)}>Forgot password?</p>
                    <Button primary className={clsx(styles.formAuthBtn)} type="submit" onClick={handleLogin}>
                        {isLoading ? <FontAwesomeIcon icon={faSpinner} /> : <span>Log in</span>}
                    </Button>
                </div>
            </form>
        </>
    );
}

export default LoginDefault;
