const WEB_SOCKET_URL = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'

export const chatAPI = {
    _subscribersMessages: [] as TSubscriptionCallback[],
    _subscribersStatus: [] as TSubscriptionStatusCallback[],
    _ws: null as WebSocket | null,
    _isOnline: false,
    _interval: null as number | null,
    create() {
        this.destroy()
        this._ws = new WebSocket(WEB_SOCKET_URL)
        this._ws.addEventListener('close', this._closeHandler.bind(this))
        this._ws.addEventListener('open', this._openHandler.bind(this))
        this._ws.addEventListener('message', this._messageHandler.bind(this))
    },
    destroy() {
        this._ws?.removeEventListener('close', this._closeHandler.bind(this))
        this._ws?.removeEventListener('open', this._openHandler.bind(this))
        this._ws?.removeEventListener('message', this._messageHandler.bind(this))
        if (this._ws && this._ws.readyState < 2) this._ws.close()
        this._ws = null
    },
    sendMessage(message: string) {
        if (this._ws?.OPEN) this._ws?.send(message)
        else this._isOnline = false
    },
    subscribeMessage(callback: TSubscriptionCallback) {
        if (!this._ws) this.create()
        this._subscribersMessages.push(callback)
    },
    unsubscribeMessage(callback: TSubscriptionCallback) {
        this._subscribersMessages = this._subscribersMessages.filter(el => el !== callback)
    },
    subscribeStatus(callback: TSubscriptionStatusCallback) {
        if (!this._ws) this.create()
        this._subscribersStatus.push(callback)
    },
    unsubscribeStatus(callback: TSubscriptionStatusCallback) {
        this._subscribersStatus = this._subscribersStatus.filter(el => el !== callback)
    },
    _messageHandler(evt: MessageEvent) {
        const newMessages = JSON.parse(evt.data)
        this._subscribersMessages.forEach(callback => callback(newMessages))
    },
    _openHandler() {
        this._isOnline = true
        if (this._interval) {
            window.clearInterval(this._interval)
            this._interval = null
        }
        this._subscribersStatus.forEach(callback => callback(this._isOnline))
    },
    _closeHandler() {
        this._isOnline = false
        this._subscribersStatus.forEach(callback => callback(this._isOnline))
        if (this._interval) window.clearInterval(this._interval)
        this._interval = window.setInterval(this.create.bind(this), 2000)
    }
};

type TSubscriptionCallback = (messages: IMessage[]) => void
type TSubscriptionStatusCallback = (status: boolean) => void

export interface IMessage {
    message: string,
    photo: string,
    userId: number,
    userName: string
}