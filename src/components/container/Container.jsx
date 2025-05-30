
function Container(
    children,
    className
) {
    return (
        <div className={`m-1 px-4 py-1 ${className}`}>{children}</div>
    )
}

export default Container;