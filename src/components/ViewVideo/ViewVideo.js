import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ViewVideo.module.scss';
import { Video, VideoAction } from './Video';
import * as listVideoService from '~/services/listVideoService';
import { UserAuth } from '~/components/Stone';

function ViewVideo({ type = '' }) {
    const { userToken } = UserAuth();
    const [listVideoUser, setListVideoUser] = useState([]);

    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false); // Quản lý trạng thái tải dữ liệu
    const [hasMore, setHasMore] = useState(true); // Kiểm tra còn dữ liệu để tải không

    const fetchApi = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await listVideoService.video(type, page, userToken);
            if (data.length > 0) {
                setListVideoUser((prev) => [...prev, ...data]); // Cập nhật danh sách hiển thị
            } else {
                setHasMore(false); // Không còn dữ liệu để tải thêm
            }
        } catch (error) {
            console.error('Error fetching videos:', error);
        } finally {
            setIsLoading(false);
        }
    }, [type, page, userToken]);

    useEffect(() => {
        setPage(1);
        setHasMore(true);
        setListVideoUser([]);
        fetchApi();
    }, [type]);

    useEffect(() => {
        if (page > 1) {
            fetchApi();
        }
    }, [page, fetchApi]);

    // xử lí khi cuộn đến cuối trang
    const handleLoadMore = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && !isLoading && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleLoadMore);
        return () => window.removeEventListener('scroll', handleLoadMore);
    }, [handleLoadMore]);

    if (listVideoUser.length === 0 && !isLoading) {
        return <div className={clsx(styles.wrapper)}>No videos available.</div>;
    }

    return (
        <div className={clsx(styles.wrapper)}>
            {listVideoUser.map((item, index) => {
                return (
                    <div className={clsx(styles.item)} key={index}>
                        <Video data={item} index={index} />
                        <VideoAction data={item} index={index} />
                    </div>
                );
            })}
            {isLoading && <div className={clsx(styles.loading)}>Loading...</div>}
        </div>
    );
}

export default ViewVideo;

ViewVideo.propTypes = {
    type: PropTypes.string,
};
