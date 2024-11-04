import * as request from '~/utils/request';

export const login = async (email, password) => {
    try {
        const res = await request.get('auth/login', {
            params: {
                email,
                password,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
