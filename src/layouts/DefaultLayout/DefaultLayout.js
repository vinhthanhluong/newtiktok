import clsx from 'clsx';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <Sidebar />
                <div className="content">{children}</div>
            </main>
        </div>
    );
}

export default DefaultLayout;
