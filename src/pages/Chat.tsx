import React, {FormEvent, useCallback, useEffect, useRef, useState} from 'react'
import {chatAPI} from '../api/endpoints/chat-ws'

// const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export default function ChatPage() {
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const [messages, setMessages] = useState<IMessage[]>([])
    const [newMessage, setNewMessage] = useState('')
    const [isWsReady, setWsReady] = useState(false)

    const handleNewMessages = useCallback((newMessages: IMessage[]) => {
        setMessages(prevMessages => [...prevMessages, ...newMessages])
    }, [])

    const handleStatusChange = useCallback((status: boolean) => {
        setWsReady(status)
    }, [])

    useEffect(() => {
        chatAPI.create()
        chatAPI.subscribeMessage(handleNewMessages)
        chatAPI.subscribeStatus(handleStatusChange)

        return () => {
            chatAPI.unsubscribeMessage(handleNewMessages)
            chatAPI.unsubscribeStatus(handleStatusChange)
            chatAPI.destroy()
        }
    }, [handleNewMessages, handleStatusChange])

    useEffect(() => {
        scrollRef.current?.scrollIntoView()
    }, [scrollRef, messages])

    const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        chatAPI.sendMessage(newMessage)
        setNewMessage('')
    }

    return <>
        <h1>Chat page</h1>
        <div style={{maxHeight: 400, overflow: 'auto'}}>
            {messages.map((message, i) => (
                <div key={i}>
                    <img src={message.photo} alt='' style={{width: 40}} /><strong>{message.userName}</strong>
                    <div>{message.message}</div>
                    <hr />
                </div>
            ))}
            <div ref={scrollRef} />
        </div>
        <form onSubmit={handleSendMessage}>
            <div>
                <textarea onChange={(evt) => setNewMessage(evt.target.value)} value={newMessage} />
            </div>
            <button disabled={!newMessage || !isWsReady} type='submit'>Send</button>
        </form>
    </>
}

export interface IMessage {
    message: string,
    photo: string,
    userId: number,
    userName: string
}