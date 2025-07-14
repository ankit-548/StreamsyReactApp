import { useId } from "react";
import React from "react";

function Button({
    children,
    className = '',
    ref,
    ...props
}) {
    const id = useId();
    return (<button type="submit" className={`m-1 px-4 py-1 rounded-xl bg-blue-500 cursor-pointer ${className}`} ref={ref} id={id} {...props}>{children}</button>)
}

export default React.forwardRef(Button);