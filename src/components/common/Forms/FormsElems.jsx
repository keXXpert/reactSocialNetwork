import React from 'react';
import myCSS from './FormsElems.module.css';

const CustomField = ({ input, meta, children, ...props }) => {
    const hasError = meta.error && meta.touched
    let newChildren = {...children}
    newChildren.props= {...newChildren.props, ...input, ...props}
    return (
        <div className={myCSS.formElems + ' ' + (hasError ? myCSS.error : '')}>
            <div>
                {newChildren}
            </div>
            {meta.error && meta.touched && <span>{meta.error}</span>}
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
// export const CustomInput = ({ input, meta, ...props }) => {
//     let oldProps = {input, meta, ...props}
//     return (
//         <CustomField {...oldProps}>
//             <input {...input} {...props} />
//         </CustomField>
//     )
// }

// export const CustomTextarea = ({ input, meta, ...props }) => {
//     let oldProps = {input, meta, ...props}
//     return (
//         <CustomField {...oldProps}>
//             <textarea {...input} {...props} />
//         </CustomField>
//     )
// }
