import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import myCSS from './FormsElems.module.css';

type ChildrenType = {
    children: JSX.Element
}

const CustomField: React.FC<WrappedFieldProps & ChildrenType> = ({ input, meta, children, ...props }) => {
    const { touched, error } = meta
    const hasError = error && touched

    let newChildren = {
        ...children as JSX.Element,
        props: { ...children.props, ...input, ...props }
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


export const CustomTextarea = (props: WrappedFieldProps) => {
    return (
        <CustomField {...props}>
            <textarea />
        </CustomField>
    )
}
export const CustomInput = (props: WrappedFieldProps) => {
    return (
        <CustomField {...props}>
            <input />
        </CustomField>
    )
}