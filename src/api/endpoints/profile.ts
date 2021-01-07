import { ProfileType, RootProfileType } from '../../types/types';
import { instance, ConfirmResponseType } from '../api';

type SetAvatarResonseType = {
    photos: {
        small: string
        large: string
    }
}

export const profileAPI = {
    getProfile(userId = 7835) {
        return instance
            .get<ProfileType>(`profile/` + userId)
            .then(res => res.data);
    },
    getStatus(userId = 7835) {
        return instance
            .get<string>(`profile/status/` + userId)
            .then(res => res.data);
    },
    updateStatus(status: string) {
        return instance
            .put<ConfirmResponseType>(`profile/status`, { status: status })
            .then(res => res.data);
    },
    setProfile(profile: RootProfileType) {
        return instance
            .put<ConfirmResponseType>(`profile`, profile)
            .then(res => res.data);
    },
    setAvatar(file: string) {
        let formData = new FormData();
        formData.append('image', file);
        return instance
            .put<ConfirmResponseType<SetAvatarResonseType>>(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => res.data);
    }
};
