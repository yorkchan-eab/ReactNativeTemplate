export const LOGIN = 'AUTH_LOGIN';
export const LOGIN_DONE = 'AUTH_LOGIN_DONE';

export const LOGOUT = 'AUTH_LOGOUT';
export const LOGOUT_DONE = 'AUTH_LOGOUT_DONE';


export type Login = ReturnType<typeof login>;
export const login = (params: {
    username: string,
    password: string,
}) => {
    return {
        type: LOGIN,
        payload: { ...params }
    }
}

export type Logout = ReturnType<typeof logout>;
export const logout = () => {
    return {
        type: LOGOUT,
    }
}
