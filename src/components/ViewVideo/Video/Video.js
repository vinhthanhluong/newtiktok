import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Slider from 'rc-slider';

import { PlayVideo, VolumeVideo } from '~/components/Control';
import { UserVideo } from '~/components/Stone';
import styles from './Video.module.scss';

function Video({ data = {}, index }) {
    const DEFAULT_VOLUME = 1; // 100%
    const MUTE_VOLUME = 0;

    const MIN_VIDEO = 0;
    const MAX_VIDEO = 100;
    const STEP_VIDEO = 10;

    const videoRef = useRef(null);
    const { isMuted, setIsMuted, volume, setVolume, volumeCurrent, setVolumeCurrent } = UserVideo();

    const [playVideo, setPlayVideo] = useState(false);
    const [openMuted, setOpenMuted] = useState(false);

    //Handle event Play && Pause Video
    const handlePlay = () => {
        setPlayVideo(!playVideo);
        !playVideo ? videoRef.current.play() : videoRef.current.pause();
    };

    //Handle event change volume video
    const handleChangeVolume = (value) => {
        setVolume(value);
        setIsMuted(value === MUTE_VOLUME);
        setVolumeCurrent(value);
        videoRef.current.volume = value;
    };

    //Handle event toggle muted video
    const handleToggleMute = () => {
        setIsMuted((prevMuted) => {
            const newMuted = !prevMuted;
            videoRef.current.muted = newMuted;
            if (newMuted) {
                setVolume(MUTE_VOLUME);
            } else {
                const restoredVolume = volumeCurrent || DEFAULT_VOLUME;
                setVolume(restoredVolume);
                videoRef.current.volume = restoredVolume;
            }
            return newMuted;
        });
    };

    // Sync (đồng bộ) Volume && Muted
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
            videoRef.current.muted = isMuted;
        }
    }, [volume, isMuted, videoRef]);

    // Handle event mouse move volume video
    const handleMouseEnterVolume = () => {
        setOpenMuted(true);
    };
    const handleMouseLeaveVolume = () => {
        setOpenMuted(false);
    };

    // Get Time video
    function formatTime(time) {
        const SecondVideo = Math.floor(time);
        const MinuteVideo = Math.floor(SecondVideo / 60);

        const minutes = MinuteVideo <= 9 ? `0${MinuteVideo}` : MinuteVideo;
        const secondCount = SecondVideo - minutes * 60;
        const second = secondCount <= 9 ? `0${secondCount}` : secondCount;
        const total = `${minutes}:${second}`;

        return total;
    }

    return (
        <div className={clsx(styles.videoBox)}>
            <video ref={videoRef} poster={data.thumb_url}>
                <source src={data.file_url} type="video/mp4" preload="auto" loop />
            </video>
            <div className={clsx(styles.control)}>
                <div className={clsx(styles.controlPlay)}>
                    <PlayVideo isPlay={playVideo} onClick={handlePlay} />
                </div>
                <div className={clsx(styles.controlVolume)}>
                    <VolumeVideo
                        openMuted={openMuted}
                        isMuted={isMuted}
                        valueVolume={volume}
                        onMouseEnterVolume={handleMouseEnterVolume}
                        onMouseLeaveVolume={handleMouseLeaveVolume}
                        onClickVolume={handleToggleMute}
                        onChangeVolume={handleChangeVolume}
                    />
                </div>
                <div className={clsx(styles.controlInput)}>
                    <Slider
                        min={MIN_VIDEO}
                        max={MAX_VIDEO}
                        value={10}
                        step={STEP_VIDEO}
                        // onChange={onChangeVolume}
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
                            // width: '3px',
                        }}
                        railStyle={{
                            backgroundColor: '#c4c4c4',
                            // width: '3px',
                        }}
                    />
                    <span className={clsx(styles.controlTime)}>{/* {currentVideo} / {totalVideo} */}</span>
                </div>
            </div>
        </div>
    );
}

export default Video;

Video.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number,
};
