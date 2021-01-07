import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '41c79253-06c7-4611-bc44-c850884ebbed'
    }
});

export type ConfirmResponseType<D = {}> = {
    data: D
    messages: Array<string>
    resultCode: number
}

