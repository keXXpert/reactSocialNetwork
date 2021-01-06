import axios from 'axios';
import { ProfileType, RootProfileType, UsersType } from '../types/types';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '41c79253-06c7-4611-bc44-c850884ebbed'
    }
});

type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number
    error?: string | null
}

export const usersAPI = {
    getUsers(page = 1, usersOnPage = 10) {
        return instance
            .get<GetUsersResponseType>(`users?page=${page}&count=${usersOnPage}`)
            .then(response => response.data);
    }
}

type ConfirmResponseType = {
    resultCode: number
    messages: Array<string>
    data: object
}

export const followAPI = {
    follow(userId: number) {
        return instance
            .post<ConfirmResponseType>(`follow/${userId}`)
            .then(response => response.data);
    },
    unFollow(userId: number) {
        return instance
            .delete<ConfirmResponseType>(`follow/${userId}`)
            .then(response => response.data);
    }
}

type SetAvatarResonseType = ConfirmResponseType & {
    data: {
        photos: {
            small: string
            large: string
        }
    }
}

export const profileAPI = {
    getProfile(userId = 7835) {
        return instance
            .get<ProfileType>(`profile/` + userId)
            .then(response => response.data);
    },
    getStatus(userId = 7835) {
        return instance
            .get<string>(`profile/status/` + userId)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance
            .put<ConfirmResponseType>(`profile/status`, { status: status })
            .then(response => response.data);
    },
    setProfile(profile: RootProfileType) {
        return instance
            .put<ConfirmResponseType>(`profile`, profile)
            .then(response => response.data);
    },
    setAvatar(file: string) {
        let formData = new FormData();
        formData.append('image', file)
        return instance
            .put<SetAvatarResonseType>(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.data);
    }
}

type AuthMeResponseType = ConfirmResponseType & {
    data: {
        id: number
        email: string
        login: string
    }
}

export const authAPI = {
    authMe() {
        return instance
            .get<AuthMeResponseType>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance
            .post<ConfirmResponseType>(`auth/login`, { email, password, rememberMe, captcha })
            .then(response => response.data);
    },
    logout() {
        return instance
            .post<ConfirmResponseType>(`auth/logout`)
            .then(response => response.data);
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance
            .get<{ url: string }>(`security/get-captcha-url`)
            .then(response => response.data);
    }

}