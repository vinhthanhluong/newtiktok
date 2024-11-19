import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Video.module.scss';

function Video({ data = {} }) {
    return (
        <div className={clsx(styles.videoBox)}>
            <video controls>
                <source src={data.file_url} type="video/mp4" />
            </video>
        </div>
    );
}

export default Video;

Video.propTypes = {
    data: PropTypes.object.isRequired,
};
