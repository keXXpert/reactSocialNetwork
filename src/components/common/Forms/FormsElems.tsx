import React from 'react';
import myCSS from './FormsElems.module.css';

type CustomFieldPropsType = {
    input: object
    meta: {
        touched: boolean
        error: string
    }
    children: React.Component
}

const CustomField: React.FC<CustomFieldPropsType> = ({ input, meta, children, ...props }) => {
    const { touched, error } = meta
    const hasError = error && touched

    let newChildren = {
        ...children as React.Component,
        props: { ...children.props, ...input, ...props }
    }

    console.log('Child', children, 'New', newChildren);
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
    console.log(props);
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