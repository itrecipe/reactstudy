import { Link } from 'react-router-dom';
import { auth } from './firebase-config';
import {useContext } from 'react';
import { signOut } from 'firebase/auth';
import {AdminFlagContext} from "../providers/Flag"

export const Main = () =>{

    const {user, setUser} = useContext(AdminFlagContext)
    const getname=()=>{
   
        console.log(auth.currentUser.displayName)
    }

  //최초 진입시 로그인 상태 확인
/*
  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
        });
        return () => unsubscribe();
      }, []);
*/

  const loginOut= async ()=>{
    try{
      await signOut(auth)
      setUser(false)
      console.log("로그아웃")
    }catch(error){
      console.log(error.message)
    }
  }

  const array=[1,2,3,4]
  
  const name = 'mike'
  
    return(
        <div>
          <li><Link to="/main">main</Link></li>
          <li><Link to="/Login">login</Link></li>
          <li><Link to="/Write">글쓰기</Link></li>
          <button onClick={getname} disabled={!user}>버튼</button>
          <button onClick={loginOut} disabled={!user}>로그아웃</button>

          {/* 컴포넌트화 해서 값을 전달한다. */}
          <div className="list">
            {/* <img src="" alt="" /> */}
            <p>제목{array[0]}</p>

            <p>이름 : {name}</p>
          </div>       
        </div>
    )

}