// types

import { DialogType, MessageType } from "../types/types"


export interface DialogsInitialStateType {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}

export type DialogsActionTypes = SendMessageActionType

// reducer

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

let initialState: DialogsInitialStateType = {
    dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Matt' },
        { id: 3, name: 'Erica' },
        { id: 4, name: 'Beck' },
        { id: 5, name: 'Kate' }
    ],
    messages: [
        { id: 1, text: 'Hey!' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'Yo! My friend!' }
    ],
}

const dialogsReducer = (state = initialState, action: DialogsActionTypes): DialogsInitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                text: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessageText: string): DialogsActionTypes => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsReducer