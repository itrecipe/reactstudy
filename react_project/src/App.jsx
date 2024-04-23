import { Route, Routes } from 'react-router-dom';
import {Main} from './page/Main';
import {Login} from './page/Login';
import {Write} from './page/Write';
import {Board} from './page/Board';
import {PostDetail} from './page/PostDetail';
import { collection, getDocs, orderBy, query} from "firebase/firestore";
import { db } from "./firebase-config"
import { useContext, useEffect, useState } from 'react';
import {AdminFlagContext} from "./providers/Flag";
export const App=()=>{
  const {lsit,setList} = useContext(AdminFlagContext)
  const [datam,setDatam]=useState([])
  const [boardKey, setBoardKey] = useState(0); // 상태 정의
  const reloadBoard = (value) => {
    console.log("재랜더링")
    setDatam(value)

  };

//   const numberTest=async ()=>{
//     const array=[]
//     const data=[]

//     let n=0;
//     try {
//       console.log("app 로딩중")
//       const querySnapshot = await getDocs(query(collection(db, "newtext"), orderBy("now", "desc")));
//         querySnapshot.forEach((doc) => {
//             data.push(doc.data())
 

//         });

//        setList(array)
//        setDatam(data)


//     } catch (error) {
//         console.error("문서를 가져오는 중 오류 발생:", error);
//     }
// }
// useEffect(()=>{
//   numberTest();

// },[])

    return(
        <div>
        <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Board" element={<Board reloadBoard={reloadBoard}/>} />
        {datam.map((array,index) => (
  <Route  path={`${index+1}`} element={<PostDetail url={array.data().img} name={array.data().name} title={array.data().title} text={array.data().text}/>} />
))}

      </Routes >

        </div>
    )
}