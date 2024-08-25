import clsx from 'clsx';

import styles from './Sidebar.module.scss';

function Sidebar() {
    return (
        <div className={clsx(styles.wrapper)}>
            <h1>Sidebar</h1>
        </div>
    );
}

export default Sidebar;
