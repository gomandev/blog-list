export const Container = (props) => {
    return (
        <div ref={props.ref} className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden">
            {props.children}
        </div>
    )
}
