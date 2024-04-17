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

  const loadImg = async (data) => {
    const pageHome =[]
    const imgUrls = [];
    for (let i = 0; i < data.length; i++) {
      try {
        const response = await axios.get(`http://apis.data.go.kr/B551011/KorService1/detailImage1?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${data[i].contentid}&imageYN=Y&subImageYN=Y&_type=json`);

        imgUrls.push(response.data.response.body.items.item[0].originimgurl);

        console.log(2)
      } catch (error) {
        console.error("에러", error);
      }

      try {
        const page=await axios.get(`https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${API_KEY}&contentId=${data[i].contentid}&defaultYN=Y&addrinfoYN=Y&overviewYN=Y&MobileOS=ETC&MobileApp=AppTest&_type=json`);

        pageHome.push(page.data.response.body.items.item[0].overview)

      } catch (error) {
        console.error("에러", error);
      }
    }
    setImgIndex(0); //이미지 조회 후 인덱스 0으로 초기화
    setImg(imgUrls);//배열로 저장한 이미지 주소 저장
    setDetail(pageHome)
  };


  const array=[1,2,3,4]
  
  const name = 'mike'
  
    return(
        <div>
          <li><Link to="/main">main</Link></li>
          <li><Link to="/Login">login</Link></li>
          <li><Link to="/Write">글쓰기</Link></li>
          <button onClick={getname} disabled={!user}>버튼</button>
          <button onClick={loginOut} disabled={!user}>로그아웃</button>
          
          {/* <PA a={a[0]}></PA>
          <PA a={a[1]}></PA>
          <PA a={a[2]}></PA> */}

          {/* 컴포넌트화 해서 값을 전달한다. */}
          <div className="list">
            {/* <img src="" alt="" /> */}
            <p>제목{array[0]}</p>

            <p>이름 : {name}</p>
          </div>

          <div>
            {/* <img src="" alt="" /> */}
            <p>이름{array[1]}</p>
            
            {/* <h1>이름{name}</h1> */}
          </div>
          <div>
            {/* <img src="" alt="" /> */}
            <p>제목{array[2]}</p>
            
            {/* <h1>이름{name}</h1> */}
          </div>
          <div>
            {/* <img src="" alt="" /> */}
            <p>제목{array[3]}</p>
            
            {/* <h1>이름{name}</h1> */}
          </div>
        
        </div>
    )

}