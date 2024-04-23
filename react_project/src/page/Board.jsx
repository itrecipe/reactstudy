import { Header } from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PostList } from "../components/PostList";
import {  useContext, useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, orderBy, query,doc} from "firebase/firestore";
import { db } from "./firebase-config"
import {PostDetail} from './PostDetail';
import { Route, Routes } from 'react-router-dom';

export const Board = ({reloadBoard}) => {

    const [page,setPage]=useState([])
    const [dtas,setDatas]=useState([])
    const [num,setNum]=useState(0)

    const [doic,setdoic]=useState([])
    
    

    

    //페이지 내용 저장 처음 한번 자동으로 실행하기 그 후부터는 버튼 누른후 번호로 실행하기
    const pagelist = async () => {
        const data=[];
        const id=[]

        let n=0;
        try {
            const querySnapshot = await getDocs(query(collection(db, "newtext"), orderBy("now", "desc")));
            querySnapshot.forEach((doc) => {
                data.push(doc);
     
  
                n++
                
 
            });
            setDatas(data) 
            reloadBoard(data);
            setdoic(id)
    
  
            setPage(Array.from({ length: Math.ceil(n / 10) }, (_, index) => index+1));


        } catch (error) {
            console.error("문서를 가져오는 중 오류 발생:", error);
        }
    } // 빈 배열을 전달하여 함수가 최초 한 번만 생성되도록 함
    useEffect(()=>{
        pagelist();


    },[])



    const onCLikcbutton=(e)=>{
        setNum(e.target.value)
        console.log(e.target.value)

    }

    const delebutton=async (docid)=>{
        await deleteDoc(doc(db,"newtext",docid))
        pagelist();

    }
    
    return (
        <div>

            <Header />
            <h1>게시판</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">게시자</th>
                        <th scope="col">제목</th>
                        <th scope="col">#</th>

                    </tr>
                </thead>
                
                <tbody>
                {dtas.slice(Number(num), Number(num)+10).map((list, index) => (
  <PostList key={index} kjy={Number(num)+Number(index)+1} title={list.data().title} name={list.data().name} delebutton={delebutton} id={list.id}/>
))}


              
            </tbody>
            </table>
            {page.map((number)=>(
                       <button onClick={onCLikcbutton} value={(number-1)*10}>{number}</button>

                    ))}
        </div>
    )
}
