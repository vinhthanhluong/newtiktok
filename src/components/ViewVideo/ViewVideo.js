import clsx from 'clsx';

import styles from './ViewVideo.module.scss';
import { Video, VideoAction } from './Video';

function ViewVideo() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.item)}>
                <Video />
                <VideoAction />
            </div>
        </div>
    );
}

export default ViewVideo;
