import * as request from '~/utils/request';

export const video = async (type, page, token) => {
    try {
        const res = await request.get('videos', {
            params: {
                type,
                page,
            },
            headers: {
                Authorization: token,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
