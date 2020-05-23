import React from 'react';
import myCSS from './Message.module.css';

const Message = ({message}) => {
    return (
        <div className={myCSS.message}>{message}</div>
    )
}

export default Message;