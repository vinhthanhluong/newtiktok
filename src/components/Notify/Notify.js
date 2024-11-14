import clsx from 'clsx';

import styles from './notify.module.scss';

function Notify() {
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.title)}>Đã xảy ra lỗi !!!</p>
        </div>
    );
}

export default Notify;
