import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Slider from 'rc-slider';

import { PlayVideo, VolumeVideo } from '~/components/Control';
import { UserVideo, UserAuth } from '~/components/Stone';
import { useVideoTime } from '~/hook/';
import styles from './Video.module.scss';
import { video } from '~/services/listVideoService';

function Video({ data = {}, index }) {
    const DEFAULT_VOLUME = 1; // 100%
    const MUTE_VOLUME = 0;

    const MIN_VIDEO = 0;
    const MAX_VIDEO = Math.floor(data?.meta?.playtime_seconds);
    const STEP_VIDEO = 1;

    const videoRef = useRef(null);
    const { isMuted, setIsMuted, volume, setVolume, volumeCurrent, setVolumeCurrent, setIdVideo, setPositionVideo } =
        UserVideo();
    const { setOpenFullScreen } = UserAuth();

    const [playVideo, setPlayVideo] = useState(false);
    const [openMuted, setOpenMuted] = useState(false);

    const [timeVideo, setTimeVideo] = useState(MIN_VIDEO);
    const durationTime = useVideoTime(data?.meta?.playtime_seconds);
    const currentTime = useVideoTime(timeVideo);

    //Handle event Play && Pause Video
    const handlePlay = () => {
        if (!videoRef.current) return;

        if (playVideo && !videoRef.current.paused) {
            videoRef.current.pause();
            setPlayVideo(false);
        } else if (videoRef.current.paused) {
            videoRef.current
                .play()
                .then(() => setPlayVideo(true))
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    //Handle Play && Paused Video when scroll
    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '0px',
            threshold: 0.75,
        };
        const callbackPlayPause = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    //Phần tử đang trong viewport
                    const playPromise = entry.target.play();

                    if (playPromise !== undefined) {
                        playPromise.then(() => setPlayVideo(true)).catch((error) => {});
                    }
                } else {
                    //Phần tử đã rời khỏi viewport
                    entry.target.pause();
                    setPlayVideo(false);
                }
            });
        };
        const observer = new IntersectionObserver(callbackPlayPause, option);
        observer.observe(videoRef.current);

        return () => {
            observer.unobserve(videoRef.current);
        };
    }, [videoRef.current]);

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

    const handleGetIdVideo = () => {
        setIdVideo(data.id);
        setPositionVideo(index);
        setOpenFullScreen(true);
    };

    return (
        <div className={clsx(styles.videoBox)}>
            <video ref={videoRef} poster={data.thumb_url} onClick={handleGetIdVideo}>
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
                        {currentTime.minutes} : {currentTime.seconds} / {durationTime.minutes} : {durationTime.seconds}
                    </span>
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
