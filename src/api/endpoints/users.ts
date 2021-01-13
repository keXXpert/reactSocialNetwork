import { UsersType } from '../../types/types';
import { instance } from '../api';

export type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number
    error?: string | null
}

export const usersAPI = {
    getUsers(page = 1, usersOnPage = 10, query = '', filter: string = '') {
        return instance
            .get<GetUsersResponseType>(`users?page=${page}&count=${usersOnPage}&term=${query}&friend=${filter}`)
            .then(res => res.data);
    }
};
