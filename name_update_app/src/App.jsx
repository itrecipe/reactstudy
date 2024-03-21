import { useContext } from "react";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card"

export const App = () => {

  //Context안의 isAdmin과 업데이트 함수를 얻는다.
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // 관리자 플래그
  //const [isAdmin, setIsAdmin] = useState(false);

  // [전환] 클릭시
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 관리자 플래그가 true일 때와 그렇지 않을때 문자열 출력을 구분한다. */}
      {isAdmin ? <span>관리자임</span> : <span>관리자 아님</span>}
      <button onClick={onClickSwitch}>전환</button>
      <Card />
      {/* <Card isAdmin={isAdmin} /> */}
    </div>
  );
}

export default App;
