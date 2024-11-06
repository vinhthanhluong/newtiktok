import * as request from '~/utils/request';

export const logout = async (email, password) => {
    try {
        const res = await request.post('auth/logout', {
            email,
            password,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
