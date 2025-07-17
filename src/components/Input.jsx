import { useId } from "react";
import React from "react";

function Input({
    label,
    type,
    placeholder,
    className,
    ...props
}, ref) {
    const id = useId();
    console.log('label',label)
    return (
        <>
            {label && (<div><label className="m-1 px-4 py-1">{`${label}`}</label></div>)}
            <input type={`${type}`} placeholder={`${placeholder}`} className={`m-1 py-1 px-4 rounded-xl bg-gray-200 ${className}`} ref={ref} id={id} {...props}/>
        </>
    )
}

export default React.forwardRef(Input);