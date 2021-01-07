import { instance, ConfirmResponseType } from '../api';

type AuthMeResponseType = {
    id: number
    email: string
    login: string
}

export const authAPI = {
    authMe() {
        return instance
            .get<ConfirmResponseType<AuthMeResponseType>>(`auth/me`)
            .then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance
            .post<ConfirmResponseType>(`auth/login`, { email, password, rememberMe, captcha })
            .then(res => res.data);
    },
    logout() {
        return instance
            .post<ConfirmResponseType>(`auth/logout`)
            .then(res => res.data);
    }
};
