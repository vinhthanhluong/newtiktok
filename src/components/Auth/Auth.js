import clsx from 'clsx';

import styles from './auth.module.scss';
import Login from './Login';
import LoginDefault from './LoginDefault';
import LoginQR from './LoginQR';
import { UserAuth } from '~/components/Stone';
import { ArrowLeftIcon, CloseIcon } from '~/assets/icon';
import Logout from './Logout';

function Auth() {
    const { loginTab, setLoginTab, userAuthDefault, userToken, setOpenAuth } = UserAuth();

    const handleBack = () => {
        setLoginTab('default');
    };

    const handleClose = () => {
        setOpenAuth(false);
        setLoginTab('default');
    };

    return (
        <div className={clsx(styles.authPopup)}>
            {loginTab !== 'default' && loginTab !== 'logout' && (
                <div className={clsx(styles.back)} onClick={handleBack}>
                    <ArrowLeftIcon />
                </div>
            )}
            {loginTab !== 'logout' && (
                <div className={clsx(styles.close)} onClick={handleClose}>
                    <CloseIcon />
                </div>
            )}
            <div className={clsx(styles.content)}>
                {(() => {
                    switch (loginTab) {
                        case 'default':
                            return <Login />;
                        case 'loginDefault':
                            return <LoginDefault />;
                        case 'loginQR':
                            return <LoginQR />;
                        case 'logout':
                            return <Logout />;
                        default:
                            return null;
                    }
                })()}
            </div>
            {!userAuthDefault && !userToken && (
                <div className={clsx(styles.footer)}>
                    Don’t have an account? <a className={clsx(styles.act)}>Sign up</a>
                </div>
            )}
        </div>
    );
}

export default Auth;
