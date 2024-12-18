import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';

const VideoContext = createContext();

export function UserVideo() {
    return useContext(VideoContext);
}

export function VideoProvider({ children }) {
    const DEFAULT_VOLUME = 1; // 100%

    const getInitialMuted = () => {
        const storedData = JSON.parse(localStorage.getItem('volumeLocal'));
        return storedData ? storedData.isMuted : false;
    };

    const getInitialVolume = () => {
        const storedData = JSON.parse(localStorage.getItem('volumeLocal'));
        return storedData ? storedData.volume : DEFAULT_VOLUME;
    };

    const [isMuted, setIsMuted] = useState(getInitialMuted());
    const [volume, setVolume] = useState(getInitialVolume());
    const [volumeCurrent, setVolumeCurrent] = useState(volume);

    const [idVideo, setIdVideo] = useState();
    const [positionVideo, setPositionVideo] = useState(null);

    useEffect(() => {
        localStorage.setItem(
            'volumeLocal',
            JSON.stringify({ isMuted, volume, volumeCurrent: isMuted ? 0 : volumeCurrent }),
        );
    }, [isMuted, volume, volumeCurrent]);

    const value = {
        isMuted,
        setIsMuted,
        volume,
        setVolume,
        volumeCurrent,
        setVolumeCurrent,
        idVideo,
        setIdVideo,
        positionVideo,
        setPositionVideo,
    };
    return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}

VideoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
