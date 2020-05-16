import React from 'react';
import myCSS from './FormsElems.module.css';

export const Textarea = ({input, meta, ...props}) => {
    debugger;
    const hasError = meta.error && meta.touched

    return (
    <div className={myCSS.formElems + ' ' + (hasError? myCSS.error:'')}>
        <div><textarea {...input} {...props} /></div>
    { meta.error && meta.touched &&  <span>{meta.error}</span> } 
    </div>
    )
}