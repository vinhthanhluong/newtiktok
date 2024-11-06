import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import Button from '~/components/Button';
import styles from './loginDefault.module.scss';
import { EyeCloseIcon, EyeOpenIcon } from '~/assets/icon';
import * as authLogin from '~/services/authLogin';

function LoginDefault() {
    const [valueAccount, setValueAccount] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [typePassword, setTypePassword] = useState('password');
    const handleIconPassword = () => {
        setShowPassword(showPassword === true ? false : true);
        setTypePassword(typePassword === 'text' ? 'password' : 'text');
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
        const result = await authLogin.login(valueAccount, valuePassword);

        localStorage.setItem('user-id', JSON.stringify(result.data));
        localStorage.setItem('token', JSON.stringify(`Bearer ${result.meta.token}`));

        setTimeout(() => {
            window.location.reload();
        }, 300);

        navigate('/');
    };

    return (
        <div className={clsx(styles.wrapper)}>
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
                            type={typePassword}
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
                        Log in
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default LoginDefault;
