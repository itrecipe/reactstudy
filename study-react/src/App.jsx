import { useEffect } from "react";
 import { useState } from "react"
import { ColoredMessage } from "./components/ColoredMessage.jsx";

export const App = () => {

    // const onClickButton = () => {
    //     alert("start");
    // };

    // CSS 객체
    // const contentStyle = {
    //     color: "blue",
    //     fontSize: "20px"
    // }

    // 분홍색용 CSS 객체 추가
    // const contentPinkStyle = {

    //     color: "pink",
    //     fontSize: "20px"
    // }

    //State정의
    const [num, setNum] = useState(0) //추가

    console.log("랜더링")

    //useEffect 사용해보기
    useEffect(() => {
        //alert("회원가입을먼저 진행해라");
        console.log(num)
        
    }, [num])

    //버튼 클릭시 State를 카운트업
    const onClickButton = () => {
        setNum(num + 1)

       
    };

    //재랜더링이란 차이가 있는 DOM을 감지하고 업데이트하여 반영해 화면을 표시한다.

    return (
        <>
            <h1 style={{ color: "red" }}>ㅎㅇ</h1>
            {/* contentStyle 객체를 생성하여 속성으로 지정 */}

            {/* <p style={contentStyle}>잘지내?</p> */}

            <ColoredMessage color="blue" message="잘지내?"></ColoredMessage>
            {/* <p style={contentPinkStyle}>잘지냄!</p> */}

            {/* {/* <ColoredMessage color="aqua" message="ㅇㅋ"></ColoredMessage> */}
            <ColoredMessage color="yellow" message="배고픔"></ColoredMessage>
            <ColoredMessage color="lightgreen" message="밥묵자!"></ColoredMessage>

            <ColoredMessage color="blue" message="잘지내?"></ColoredMessage>
            <ColoredMessage color="pink" message="잘지내?"></ColoredMessage>

            <p>{num}</p>
            <button onClick={onClickButton}>버튼</button>
        </>
    )
    // Props는 컴포넌트에 전달하는 인수와 같은것 (제일 중요한 개념, 무조건 외워야 한다!)
}
