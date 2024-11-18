import clsx from 'clsx';

import styles from './Video.module.scss';

function Video() {
    return (
        <div className={clsx(styles.video)}>
            <video controls>
                <source src="./zxc.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Video;
