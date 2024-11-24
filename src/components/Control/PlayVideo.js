import PropTypes from 'prop-types';

import { PauseIcon, PlayIcon } from '~/assets/icon';

function PlayVideo({ isPlay = false, onClick = () => {} }) {
    return <div onClick={onClick}>{isPlay ? <PauseIcon /> : <PlayIcon />}</div>;
}

export default PlayVideo;

PlayVideo.propTypes = {
    isPlay: PropTypes.bool,
    onClick: PropTypes.func,
};
