import PropTypes from 'prop-types';
import clsx from 'clsx';
import Slider from 'rc-slider';

import { VolumeIcon, VolumeMuteIcon } from '~/assets/icon';
import styles from './control.module.scss';

function VolumeVideo({
    openMuted = false,
    isMuted = false,
    valueVolume,
    onMouseEnterVolume = () => {},
    onMouseLeaveVolume = () => {},
    onClickVolume = () => {},
    onChangeVolume = () => {},
}) {
    const MIN_VALUE = 0;
    const MAX_VALUE = 1;
    const STEP = 0.1;

    return (
        <div className={clsx(styles.wrapVolume)} onMouseEnter={onMouseEnterVolume} onMouseLeave={onMouseLeaveVolume}>
            <div className={clsx(styles.btnVolume)} onClick={onClickVolume}>
                {isMuted ? <VolumeMuteIcon /> : <VolumeIcon />}
            </div>

            {openMuted && (
                <div className={clsx(styles.progressVolume)}>
                    <Slider
                        min={MIN_VALUE}
                        max={MAX_VALUE}
                        value={valueVolume}
                        step={STEP}
                        vertical
                        onChange={onChangeVolume}
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
                            width: '3px',
                        }}
                        railStyle={{
                            backgroundColor: '#c4c4c4',
                            width: '3px',
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default VolumeVideo;

VolumeVideo.propTypes = {
    openMuted: PropTypes.bool,
    isMuted: PropTypes.bool,
    valueVolume: PropTypes.number.isRequired,
    onMouseEnterVolume: PropTypes.func,
    onMouseLeaveVolume: PropTypes.func,
    onClickVolume: PropTypes.func,
    onChangeVolume: PropTypes.func,
};
