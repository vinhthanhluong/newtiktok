import clsx from 'clsx';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <main className={clsx(styles.main)}>
                <Sidebar />
                <div className={clsx(styles.content)}>{children}</div>
            </main>
        </div>
    );
}

export default DefaultLayout;
