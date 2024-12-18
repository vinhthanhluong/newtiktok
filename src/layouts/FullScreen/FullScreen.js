import { useState, useEffect } from 'react';
import clsx from 'clsx';

import { UserVideo, UserAuth } from '~/components/Stone';

import * as getAVideo from '~/services/getAVideo';

import Video from './Video';
import Comment from './Comment';
import styles from './FullScreen.module.scss';

function FullScreen() {
    const { idVideo, positionVideo } = UserVideo();
    const { userToken } = UserAuth();

    const [dataVideo, setDataVideo] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await getAVideo.video(idVideo, userToken);
                setDataVideo(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
        return () => {};
    }, []);

    return (
        <div className={clsx(styles.wrapper)}>
            <Video data={dataVideo} index={positionVideo} />
            <Comment />
        </div>
    );
}

export default FullScreen;
