import PropTypes from 'prop-types';
import clsx from 'clsx';

import { VolumeIcon, VolumeMuteIcon } from '~/assets/icon';
import styles from './control.module.scss';
import InputSlider from '~/components/InputSlider';

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
                    <InputSlider
                        widthY="3px"
                        heightY="60px"
                        min={MIN_VALUE}
                        max={MAX_VALUE}
                        step={STEP}
                        value={valueVolume}
                        onChange={onChangeVolume}
                        isVertical
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
