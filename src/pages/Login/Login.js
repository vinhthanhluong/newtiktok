import clsx from 'clsx';

import styles from './login.module.scss';
import LoginList from './LoginList';
import LoginUserDeafult from './LoginUserDeafult';
import { UserAuth } from '~/components/Stone';

function Login() {
    const { loginDeafult } = UserAuth();

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.content)}>{loginDeafult ? <LoginUserDeafult /> : <LoginList />}</div>
            <div className={clsx(styles.footer)}>
                Bạn không có tài khoản? <a className={clsx(styles.act)}>Đăng ký</a>
            </div>
        </div>
    );
}

export default Login;
