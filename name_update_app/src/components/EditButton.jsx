//State를 참조할 컴포넌트에서 React.useContext를 사용

// "react"에서 useContext를 improt
import { useContext } from "react";

// 작성한 Context를 import
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px"
}

export const EditButton = () => {
    //Context 안의 isAdmin을 얻는다.
    const { isAdmin } = useContext(AdminFlagContext);
   
    return (
        <button style={style} disabled={!isAdmin}>
            수정
        </button>
    )
}

/* 이전 props 코드
export const EditButton = props => {
    const { isAdmin } = props;
    // isAdmin이 false일 때 (관리자가 아닐 때) 버튼을 비활성화 한다.

    // useContext의 인수에 참조할 Context를 지정
    const contextValue = useContext(AdminFlagContext);
    console.log(contextValue); // { samplevalue : "테스트" }

    return (
        <button style={style} disabled={!isAdmin}>
            수정
        </button>
    )
}
*/