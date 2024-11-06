import clsx from 'clsx';

import styles from './login.module.scss';
import LoginList from './LoginList';
import LoginDefault from './LoginDefault';
import LoginQR from './LoginQR';
import { UserAuth } from '~/components/Stone';
import { ArrowLeftIcon } from '~/assets/icon';
import Button from '~/components/Button';
function Login() {
    const { loginTab, setLoginTab, userAuthDefault, userToken } = UserAuth();

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

                {/* <p className={clsx(styles.logoutTitle)}>Are you sure you want to log out?</p>
                <div className={clsx(styles.logoutBtn)}>
                    <Button white className={clsx(styles.btnCancel)}>
                        Cancel
                    </Button>
                    <Button primary className={clsx(styles.btnLogout)}>
                        Log out
                    </Button>
                </div> */}
            </div>
            {userAuthDefault && userToken && (
                <div className={clsx(styles.footer)}>
                    Don’t have an account? <a className={clsx(styles.act)}>Sign up</a>
                </div>
            )}
        </div>
    );
}

export default Login;
