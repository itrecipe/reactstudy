import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px"
};

// export const Child1 = memo(() => { //삭제

export const Child1 = memo((props) => {

    //Props로부터 함수를 전개(분할 대입)   
    const { onClickReset } = props;
    
    console.log("Child1 랜더링");

    return (
        <div style={style}>
            <p>Child1</p>
            <button onClick={ onClickReset }>리셋</button>
            <Child2 />
            <Child3 />
        </div>
    )
})
