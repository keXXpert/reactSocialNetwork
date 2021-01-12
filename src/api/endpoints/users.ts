import { UsersType } from '../../types/types';
import { instance } from '../api';

export type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number
    error?: string | null
}

export const usersAPI = {
    getUsers(page = 1, usersOnPage = 10, query = '', friends: boolean | null = null) {
        return instance
            .get<GetUsersResponseType>(`users?page=${page}&count=${usersOnPage}&term=${query}&friend=${friends != null ? friends : ''}`)
            .then(res => res.data);
    }
};
