import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import Button from '~/components/Button';
import { ArrowLeftIcon, CloseIcon } from '~/assets/icon';
import { PlayVideo, VolumeVideo } from '~/components/Control';
import { UserVideo, UserAuth } from '~/components/Stone';
import { useVideoTime } from '~/hook/';

import styles from './FullScreen.module.scss';

function Video({ data = {}, index }) {
    const MIN_VIDEO = 0;
    const MAX_VIDEO = Math.floor(data?.meta?.playtime_seconds);
    const STEP_VIDEO = 1;

    const { volume } = UserVideo();
    const { setOpenFullScreen } = UserAuth();

    const [playVideo, setPlayVideo] = useState(false);

    const videoRef = useRef();

    const [timeVideo, setTimeVideo] = useState(MIN_VIDEO);
    const durationTime = useVideoTime(data?.meta?.playtime_seconds);
    const currentTime = useVideoTime(timeVideo);

    const handleClose = () => {
        setOpenFullScreen(false);
    };

    //Handle event Play && Pause Video
    const handlePlay = () => {
        // if (!videoRef.current) return;
        // if (playVideo && !videoRef.current.paused) {
        //     videoRef.current.pause();
        //     setPlayVideo(false);
        // } else if (videoRef.current.paused) {
        //     videoRef.current
        //         .play()
        //         .then(() => setPlayVideo(true))
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // }
    };

    useEffect(() => {
        if (videoRef.current && playVideo) {
            videoRef.current.play();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [playVideo]);

    // Handle event change video time
    const onChangeVideo = (value) => {
        setTimeVideo(value);
        videoRef.current.currentTime = value;
    };

    // Handle event timeupdate video time
    useEffect(() => {
        const handleUpdateTime = () => {
            if (videoRef.current) {
                setTimeVideo(videoRef.current.currentTime);
            }
        };
        if (videoRef.current && videoRef.current.paused) {
            videoRef.current.addEventListener('timeupdate', handleUpdateTime);
        }

        const handleEndVideo = () => {
            if (videoRef.current) {
                setPlayVideo(false);
            }
        };

        if (videoRef.current) {
            videoRef.current.addEventListener('ended', handleEndVideo);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('timeupdate', handleUpdateTime);
                videoRef.current.pause();

                videoRef.current.removeEventListener('ended', handleEndVideo);
            }
        };
    }, [videoRef.current]);

    return (
        <div className={clsx(styles.wrapVideo)}>
            <div className={clsx(styles.videoMain)}>
                <video ref={videoRef} poster={data.thumb_url}>
                    <source src={data.file_url} type="video/mp4" preload="auto" loop />
                </video>
                <div className={clsx(styles.control)}>
                    <div className={clsx(styles.controlPlay)}>
                        <PlayVideo isPlay={playVideo} onClick={handlePlay} />
                    </div>
                    <div className={clsx(styles.controlInput)}>
                        <Slider
                            min={MIN_VIDEO}
                            max={MAX_VIDEO}
                            value={timeVideo}
                            step={STEP_VIDEO}
                            onChange={onChangeVideo}
                            handleStyle={{
                                backgroundColor: '#fff',
                                borderColor: '#fff',
                                opacity: 1,
                                boxShadow: 'none',
                                width: '13px',
                                height: '13px',
                            }}
                            trackStyle={{
                                backgroundColor: '#fff',
                            }}
                            railStyle={{
                                backgroundColor: '#c4c4c4',
                            }}
                        />
                        <span className={clsx(styles.controlTime)}>
                            {currentTime.minutes} : {currentTime.seconds} / {durationTime.minutes} :{' '}
                            {durationTime.seconds}
                        </span>
                    </div>
                </div>
            </div>

            <div className={clsx(styles.arrow)}>
                <Button className={clsx(styles.arrowBtn, styles.arrowTop)}>
                    <ArrowLeftIcon />
                </Button>
                <Button className={clsx(styles.arrowBtn, styles.arrowBottom)}>
                    <ArrowLeftIcon />
                </Button>
            </div>
            <div className={clsx(styles.controlVolume)}>
                <VolumeVideo
                    // openMuted={openMuted}
                    // isMuted={isMuted}
                    valueVolume={volume}
                    // onMouseEnterVolume={handleMouseEnterVolume}
                    // onMouseLeaveVolume={handleMouseLeaveVolume}
                    // onClickVolume={handleToggleMute}
                    // onChangeVolume={handleChangeVolume}
                />
            </div>
            <Button className={clsx(styles.close)} onClick={handleClose}>
                <CloseIcon />
            </Button>
        </div>
    );
}

export default Video;

Video.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
};
