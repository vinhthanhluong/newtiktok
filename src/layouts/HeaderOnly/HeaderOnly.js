import clsx from 'clsx';

import styles from './HeaderOnly.module.scss';
import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="content"> {children}</div>
            </main>
        </div>
    );
}

export default HeaderOnly;
