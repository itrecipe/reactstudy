import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";


export const App = memo(() => {
  console.log("App 랜더링");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  /* 이전 코드
  const onClickReset = () => {
    setNum(0)
  }
  */

  /* useMemo 구문
    const sum = useMemo(() => {

    })
  */

  // 함수 메모이제이션
  const onClickReset = useCallback(() => {
    setNum(0)
  }, []);

  return (
    <>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>
      
      {/* <Child1 />  삭제 */}
      
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  )
});
