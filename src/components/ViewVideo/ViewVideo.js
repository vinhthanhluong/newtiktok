import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ViewVideo.module.scss';
import { Video, VideoAction } from './Video';
import * as listVideoService from '~/services/listVideoService';
import { UserAuth } from '~/components/Stone';

function ViewVideo({ type = '' }) {
    const { userToken } = UserAuth();
    const [dataVideo, setdataVideo] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await listVideoService.video(type, 1, userToken);
            setdataVideo(data);
        };
        fetchApi();
    }, [type]);

    if (dataVideo.length === 0) {
        return;
    }

    return (
        <div className={clsx(styles.wrapper)}>
            {dataVideo.map((item, index) => {
                return (
                    <div className={clsx(styles.item)} key={index}>
                        <Video data={item} index={index} />
                        <VideoAction data={item} index={index} />
                    </div>
                );
            })}
        </div>
    );
}

export default ViewVideo;

ViewVideo.propTypes = {
    type: PropTypes.string,
};
