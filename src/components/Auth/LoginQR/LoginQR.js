import clsx from 'clsx';

import styles from './loginQR.module.scss';

function LoginQR() {
    return (
        <>
            <p className={clsx(styles.title)}>Log in with QR code</p>
            <div className={clsx(styles.formQR)}>
                <div className={clsx(styles.formQRBox)}>
                    <img src="https://placehold.jp/170x170.png" alt="QR code" />
                </div>
                <div className={clsx(styles.formQRText)}>
                    <p>1. Scan with your mobile device’s camera</p>
                    <p>2. Confirm login or sign up</p>
                </div>
            </div>
        </>
    );
}

export default LoginQR;
