import { useId } from "react";
import React from "react";

function Input(
    label,
    type,
    placeholder,
    className,
    ref,
    ...props
) {
    const id = useId();
    return (
        <>
            {label && (<label className="m-1 px-4 py-1">{label}</label>)}
            <input type={`${type}`} placeholder={`${placeholder}`} className={`m-1 py-1 px-4 rounded-xl ${className}`} ref={ref} id={id} {...props}/>
        </>
    )
}

export default React.forwardRef(Input);