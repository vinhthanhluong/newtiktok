import * as request from '~/utils/request';

export const login = async (email, password) => {
    try {
        const res = await request.post('auth/login', {
            email,
            password,
        });
        return res.data;
    } catch (error) {
        return { errorCode: error.response.status };
    }
};
