import React from 'react';
import myCSS from './Message.module.css';

const Message = (props) => {
    return (
        <div className={myCSS.message}>{props.message}</div>
    )
}

export default Message;