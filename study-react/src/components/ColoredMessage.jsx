export const ColoredMessage = (props) => {
    
    console.log(props);

    const contentStyle = {
        // color : "blue",

        color : props.color,
        fontSize : "20px"
    }
    // return <p style={contentStyle}>잘 지내?</p>
    // return <p style={contentStyle}>{props.message}</p>

    return <p style={contentStyle}>{props.children}</p>
}