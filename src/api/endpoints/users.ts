import { UsersType } from '../../types/types';
import { instance } from '../api';

export type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number
    error?: string | null
}

export const usersAPI = {
    getUsers(page = 1, usersOnPage = 10) {
        return instance
            .get<GetUsersResponseType>(`users?page=${page}&count=${usersOnPage}`)
            .then(res => res.data);
    }
};
