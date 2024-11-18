import clsx from 'clsx';

import styles from './home.module.scss';
import ActionsPage from '~/components/ActionsPage';
import ViewVideo from '~/components/ViewVideo';

function Home() {
    return (
        <>
            <ViewVideo />
            <ActionsPage />
        </>
    );
}

export default Home;
