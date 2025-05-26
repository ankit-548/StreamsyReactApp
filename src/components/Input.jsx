import { useId } from "react";

function Input(
    type,
    placeholder,
    className,
    ref,
    ...props
) {
    const id = useId();
    return (
        <input type={`${type}`} placeholder={`${placeholder}`} className={`m-1 py-1 px-4 rounded-xl ${className}`} ref={ref} id={id} {...props}/>
    )
}

export default React.forwardRef(Input);