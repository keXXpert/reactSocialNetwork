import React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import myCSS from './FormsElems.module.css';

type CustomFieldPropsType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    children: React.Component
}

const CustomField: React.FC<CustomFieldPropsType> = ({ input, meta, children, ...props }) => {
    const { touched, error } = meta
    const hasError = error && touched

    let newChildren = {
        ...children as React.Component,
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

export const CustomTextarea = (props: any) => {
    return (
        <CustomField {...props}>
            <textarea />
        </CustomField>
    )
}
export const CustomInput = (props: any) => {
    return (
        <CustomField {...props}>
            <input />
        </CustomField>
    )
}