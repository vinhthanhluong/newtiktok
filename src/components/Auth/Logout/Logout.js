import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import styles from './logout.module.scss';
import Button from '~/components/Button';
import { UserAuth } from '~/components/Stone';
import * as authLogout from '~/services/authLogout';
import { UserNotify } from '~/components/Stone';

function Logout() {
    const { setOpenAuth, userToken } = UserAuth();
    const navigate = useNavigate();
    const { setInfoNotify } = UserNotify();

    const handleOpen = () => {
        setOpenAuth(false);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        const result = await authLogout.logout(userToken);
        if (result.errorCode) {
            setInfoNotify({
                content: 'Logout failed. Try again later',
                error: true,
                delay: 2000,
                isNotify: true,
            });
            setTimeout(() => {
                window.location.reload();
            }, 300);
        } else {
            setInfoNotify({
                content: 'Logout Success',
                success: true,
                delay: 2000,
                isNotify: true,
            });
            localStorage.removeItem('token');
            localStorage.removeItem('user-id');
            navigate('/');
            setTimeout(() => {
                window.location.reload();
            }, 300);
        }
    };

    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.logoutTitle)}>Are you sure you want to log out?</p>
            <div className={clsx(styles.logoutBtn)}>
                <Button white className={clsx(styles.btnCancel)} onClick={handleOpen}>
                    Cancel
                </Button>
                <Button primary className={clsx(styles.btnLogout)} onClick={handleLogout}>
                    Log out
                </Button>
            </div>
        </div>
    );
}

export default Logout;
