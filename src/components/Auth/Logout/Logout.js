import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import styles from './logout.module.scss';
import Button from '~/components/Button';
import { UserAuth } from '~/components/Stone';
import * as authLogout from '~/services/authLogout';

function Logout() {
    const { setOpenAuth, userToken } = UserAuth();
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpenAuth(false);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        const result = await authLogout.logout(userToken);

        localStorage.removeItem('token');
        localStorage.removeItem('user-id');
        navigate('/');
        setTimeout(() => {
            window.location.reload();
        }, 300);
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
