import React from "react";

import ReactDOM from "react-dom";
import {App} from "./App.jsx"  //이파일을 사용


// const App = () => {  //함수정의
//     return (      //이렇게 감싸줘야지 여러줄 사용가능 
//     <> 
//     <h1>안녕하세요</h1>
//     <p>잘지내시죠</p>   
//     </> 
//     );
// }

ReactDOM.render(<App />, document.getElementById("root"));