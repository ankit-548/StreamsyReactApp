import { useId } from "react";

function Button({
    children,
    className = '',
    ref,
    ...props
}) {
    const id = useId();
    return (<button className={`m-1 px-4 py-1 rounded-xl bg-primary ${className}`} ref={ref} id={id} {...props}>{children}</button>)
}

export default React.forwardRef(Button);