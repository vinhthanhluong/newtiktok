import * as request from '~/utils/request';

export const logout = async (token) => {
    try {
        const res = await request.post(
            'auth/logout',
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        return res;
    } catch (error) {
        return { errorCode: error.response.status };
    }
};
