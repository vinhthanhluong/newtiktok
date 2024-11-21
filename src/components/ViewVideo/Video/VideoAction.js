import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faPlus, faShare } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Video.module.scss';

function VideoAction({ data = {}, index }) {
    return (
        <div className={clsx(styles.videoAction)}>
            <div className={clsx(styles.avatar)}>
                <div className={clsx(styles.avatarImg)}>
                    <Link to={`/@${data.user.nickname}`}>
                        <LazyLoad height="100%">
                            <Image src={data.user.avatar} alt={data?.user.nickname} />
                        </LazyLoad>
                        <span className={clsx(styles.avatarIcon)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </Link>
                </div>
            </div>
            <Button className={clsx(styles.btn)}>
                <span className={clsx(styles.btnIcon)}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className={clsx(styles.btnTxt)}>{data?.likes_count}</span>
            </Button>
            <Button className={clsx(styles.btn)}>
                <span className={clsx(styles.btnIcon)}>
                    <FontAwesomeIcon icon={faCommentDots} />
                </span>
                <span className={clsx(styles.btnTxt)}>{data?.comments_count}</span>
            </Button>
            <Button className={clsx(styles.btn)}>
                <span className={clsx(styles.btnIcon)}>
                    <FontAwesomeIcon icon={faBookmark} />
                </span>
                <span className={clsx(styles.btnTxt)}>{data?.likes_count}</span>
            </Button>
            <Button className={clsx(styles.btn)}>
                <span className={clsx(styles.btnIcon)}>
                    <FontAwesomeIcon icon={faShare} />
                </span>
                <span className={clsx(styles.btnTxt)}>{data?.shares_count}</span>
            </Button>
        </div>
    );
}

export default VideoAction;

VideoAction.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number,
};
