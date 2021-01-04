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

export interface ProfileType {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: string
}

export interface DialogType {
    id: number
    name: string
}
export interface MessageType {
    id: number
    text: string
}
