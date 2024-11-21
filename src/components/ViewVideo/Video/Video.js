import { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Video.module.scss';

function Video({ data = {}, index }) {
    const videoRef = useRef(null);

    // const setRef = useCallback((node) => {
    //     if (node) {
    //         videoRef.current = node;
    //     }
    // }, []);

    const handleClick = () => {
        console.log(videoRef.current);
    };

    return (
        <div className={clsx(styles.videoBox)}>
            <video ref={videoRef} onClick={handleClick} controls poster={data.thumb_url}>
                <source src={data.file_url} type="video/mp4" preload="auto" loop />
            </video>
            <div className={clsx(styles.control)}>
                <div className={clsx(styles.icPlayPause)}></div>
                <div className={clsx(styles.icVolume)}></div>
                <div className={clsx(styles.icProgress)}></div>
            </div>
        </div>
    );
}

export default Video;

Video.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number,
};
