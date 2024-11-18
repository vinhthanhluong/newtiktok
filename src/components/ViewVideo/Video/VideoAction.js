import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faPlus, faShare } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Video.module.scss';

function VideoAction() {
    return (
        <div className={clsx(styles.buttonActionItem)}>
            <div className={clsx(styles.avatar)}>
                <p className={clsx(styles.avatarImg)}>
                    <Image src="" />
                    <span className={clsx(styles.avatarIcon)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </p>
            </div>
            <Button className={clsx(styles.btn)}>
                <span className={clsx(styles.btnIcon)}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className={clsx(styles.btnTxt)}>26.4K</span>
            </Button>
            <Button className={clsx(styles.btn)}>
                <span className={clsx(styles.btnIcon)}>
                    <FontAwesomeIcon icon={faCommentDots} />
                </span>
                <span className={clsx(styles.btnTxt)}>347</span>
            </Button>
            <Button className={clsx(styles.btn)}>
                <span className={clsx(styles.btnIcon)}>
                    <FontAwesomeIcon icon={faBookmark} />
                </span>
                <span className={clsx(styles.btnTxt)}>1039</span>
            </Button>
            <Button className={clsx(styles.btn)}>
                <span className={clsx(styles.btnIcon)}>
                    <FontAwesomeIcon icon={faShare} />
                </span>
                <span className={clsx(styles.btnTxt)}>343</span>
            </Button>
        </div>
    );
}

export default VideoAction;
