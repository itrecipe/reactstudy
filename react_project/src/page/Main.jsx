import { Link } from 'react-router-dom';
import { auth } from './firebase-config';
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { AdminFlagContext } from "../providers/Flag"
import MainList from '../components/MainList';

export const Main = () => {

  const { user, setUser } = useContext(AdminFlagContext)

  const getname = () => {

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

  const loginOut = async () => {
    try {
      await signOut(auth)
      setUser(false)
      console.log("로그아웃")
    } catch (error) {
      console.log(error.message)
    }
  }
  // 예시 데이터 배열
  const dataArray = [
    { id: 1, url: 'https://example.com/image1.jpg', name: 'Title 1' },
    { id: 2, url: 'https://example.com/image2.jpg', name: 'Title 2' },
    { id: 3, url: 'https://example.com/image3.jpg', name: 'Title 3' },
  ];

  return (
    <div>
      <li><Link to="/main">main</Link></li>
      <li><Link to="/Login">login</Link></li>
      <li><Link to="/Write">글쓰기</Link></li>
      <button onClick={getname} disabled={!user}>버튼</button>
      <button onClick={loginOut} disabled={!user}>로그아웃</button>

      {/* MainList 컴포넌트에 데이터 배열을 전달하여 출력 */}
      {/* <MainList arrays={dataArray} /> dataArray를 props로 전달 */}
      {dataArray.map((item, index) => (
         //배열 순회

         <MainList arrays={dataArray[index]}></MainList>

))}
       
    </div>
  )
}