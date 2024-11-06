import clsx from 'clsx';

import styles from './login.module.scss';
import LoginList from './LoginList';
import LoginDefault from './LoginDefault';
import LoginQR from './LoginQR';
import { UserAuth } from '~/components/Stone';
import { ArrowLeftIcon } from '~/assets/icon';

function Logout() {
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
            <div className={clsx(styles.content)}></div>
        </div>
    );
}

export default Logout;
