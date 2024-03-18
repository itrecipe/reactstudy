export const App = () => {

    const onClickButton = () => {
        alert();
    };

    // CSS 객체
    const contentStyle = {
        color : "blue",
        fontSize : "20px"
    }
    
    return (
        <>
        <h1 style={{ color:"red"}}>ㅎㅇ</h1>
        {/* contentStyle 객체를 생성하여 속성으로 지정 */}
        <p style={contentStyle}>잘지내?</p> 
        <button onClick={onClickButton}>버튼</button>
        </>
    )
}
