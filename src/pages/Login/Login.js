import clsx from 'clsx';

import styles from './login.module.scss';
import LoginList from './LoginList';
import LoginDefault from './LoginDefault';
import LoginQR from './LoginQR';
import { UserAuth } from '~/components/Stone';
import { ArrowLeftIcon } from '~/assets/icon';

function Login() {
    const { loginTab, setLoginTab } = UserAuth();

    const handleBack = () => {
        setLoginTab('default');
    };

    return (
        <div className={clsx(styles.wrapper)}>
            {loginTab !== 'default' && (
                <div className={clsx(styles.back)} onClick={handleBack}>
                    <ArrowLeftIcon />
                </div>
            )}
            <div className={clsx(styles.content)}>
                {(() => {
                    switch (loginTab) {
                        case 'default':
                            return <LoginList />;
                        case 'loginEmail':
                            return <LoginDefault />;
                        case 'loginQR':
                            return <LoginQR />;
                        default:
                            return null;
                    }
                })()}
            </div>
            <div className={clsx(styles.footer)}>
                Don’t have an account? <a className={clsx(styles.act)}>Sign up</a>
            </div>
        </div>
    );
}

export default Login;
