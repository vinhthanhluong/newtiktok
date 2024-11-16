import clsx from 'clsx';

import styles from './home.module.scss';
import Button from '~/components/Button';

function Home() {
    return (
        <div className={clsx(styles.wrapper)}>
            <article>
                <div className={clsx(styles.wrap)}>
                    <div className={clsx(styles.video)}></div>
                    <div className={clsx(styles.buttonActionItem)}>
                        <div className={clsx(styles.avatar)}></div>
                        <Button className={clsx(styles.btn)}>
                            <span>icon</span>
                            <span>text</span>
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Home;
