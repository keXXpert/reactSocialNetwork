import { instance, ConfirmResponseType } from '../api';

export const followAPI = {
    follow(userId: number) {
        return instance
            .post<ConfirmResponseType>(`follow/${userId}`)
            .then(res => res.data);
    },
    unFollow(userId: number) {
        return instance
            .delete<ConfirmResponseType>(`follow/${userId}`)
            .then(res => res.data);
    }
};
