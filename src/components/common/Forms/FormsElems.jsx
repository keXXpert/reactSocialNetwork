import React from 'react';
import myCSS from './FormsElems.module.css';

const CustomField = ({ input, meta: {touched, error}, children, ...props }) => {
    const hasError = error && touched
    let newChildren = {
        ...children,
        props: {...children.props, ...input, ...props}
    }
    return (
        <div className={myCSS.formElems + ' ' + (hasError ? myCSS.error : '')}>
            <div>
                {newChildren}
            </div>
            {error && touched && <span>{error}</span>}
        </div>
    )
}

export const CustomTextarea = (props) => {
    return (
        <CustomField {...props}>
            <textarea />
        </CustomField>
    )
}
export const CustomInput = (props) => {
    return (
        <CustomField {...props}>
            <input />
        </CustomField>
    )
}