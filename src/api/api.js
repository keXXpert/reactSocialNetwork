import * as axios from 'axios';

const instance = axios.create( {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '41c79253-06c7-4611-bc44-c850884ebbed'
        }
});

export const usersAPI = {
    getUsers(page = 1, usersOnPage = 10) {
    return instance
        .get(`users?page=${page}&count=${usersOnPage}`)
        .then(response => response.data);
    }
}

export const followAPI = {
    follow(userId) {
    return instance
        .post(`follow/${userId}`)
        .then(response => response.data);
    },
    unFollow(userId) {
    return instance
        .delete(`follow/${userId}`)
        .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId = 7835) {
    return instance
        .get(`profile/` + userId)
        .then(response => response.data);
    },
    getStatus(userId = 7835) {
    return instance
        .get(`profile/status/` + userId)
        .then(response => response.data);
    },
    updateStatus(status) {
    return instance
        .put(`profile/status`, {status: status})
        .then(response => response.data);
    },
    setAvatar(file) {
        let formData = new FormData();
        formData.append('image', file)
    return instance
        .put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => response.data);
    }
}

export const authAPI = {
    authMe() {
    return instance
        .get(`auth/me`)
        .then(response => response.data);
    },
    login(email, password,rememberMe = false) {
    return instance
        .post(`auth/login`, {email, password, rememberMe})
        .then(response => response.data);
    },
    logout() {
    return instance
        .post(`auth/logout`)
        .then(response => response.data);
    }
}