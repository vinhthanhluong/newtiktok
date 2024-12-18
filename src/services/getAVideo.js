import * as request from '~/utils/request';

export const video = async (id, token) => {
    try {
        const res = await request.get(`videos/${id}`, {
            headers: {
                Authorization: token,
            },
        });
        return res.data;
    } catch (error) {
        return { errCode: error.response.status };
    }
};
