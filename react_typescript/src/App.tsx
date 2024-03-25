import { useEffect, useState } from "react"
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";

//사용자 정보 타입을 정의
/* 외부 types 컴포넌트에 정의를 해두었고 해당되는 types 폴더에서
 import로 끌어왔기 때문에 주석처리

type User = {
  id: number;
  name: string;
  age:number;
  personalColor: string;
}
*/

export const App = () => {
  // 얻은 사용자 정보
  // const [users, setUsers] = useState([]); 이전 코드
  const [users, setUsers] = useState<User[]>([]);

  //화면에 표시될 때 사용자 정보 얻기
  useEffect(() => {
    //axios.get("https://example.com/users").then((res) => { 이전 코드
    axios.get<User[]>("https://example.com/users").then((res) => {
      setUsers(res.data)
    })
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem 
          id={user.id} 
          name={user.name} 
          age={user.age} 
          personalColor={user.personalColor} 
          hobbies={user.hobbies} 
          />
      ))}
    </div>
  );
};