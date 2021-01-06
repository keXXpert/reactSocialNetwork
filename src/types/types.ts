export interface UsersType {
    id: number
    name: string
    status?: string
    followed: boolean
    photos: {
        small: string
        large: string
    }
}

export interface ContactsType {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export interface RootProfileType {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    aboutMe: string
}

export type PhotosType = {
    large: string
    small: string
}

export interface ProfileType extends RootProfileType {
    photos: PhotosType
}

export interface DialogType {
    id: number
    name: string
}
export interface MessageType {
    id: number
    text: string
}
