//React 라이브러리와 useCallback, useState, useEffect 훅(hooks)를 가져온다.
import React, { useCallback, useState, useEffect } from "react";

//http 요청을 보내기 위해 axios 라이브러리를 가져온다.
import axios from 'axios';

//함수형 컴포넌트 App을 정의하고 이것을 이름이 지정된 내보내기로 내보낸다.
export const App = () => {
  
  //API 키를 문자열로 저장하는 상수를 선언한다.
  const API_KEY = "RMLweHeGwN%2B8KPNZCwR2W56r6zhRfTsr%2FFE%2B8arn77y8MBjbWpbJClN2aRsyY3Br9XEojgftBJEBHS2O%2BzysyQ%3D%3D";
  
  //데이터를 저장할 상태 변수 data와 이를 업데이트할 함수 setData를 선언한다. (초기값은 빈 배열)
  const [data, setData] = useState([]);
  
  /* 현재 보여줄 이미지 인덱스를 저장하는 상태변수,
     imgIndex와 이것을 업데이트 해줄 함수 setImgIndex를 선언한다.
     (초기값 0)
  */
 // const [loading, setLoading] = useState(true);
  const [imgIndex, setImgIndex] = useState(0);
  
  //이미지 URL을 저장할 상태 변수 img와 이를 업데이트할 함수 setImg를 선언한다. (초기값 빈 배열)
  const [img,setImg]=useState([])

  //데이터를 비동기적으로 로드하는 함수 loadData를 useCallback 훅을 사용해 메모이제이션 한다.
  const loadData = useCallback(async () => {
    try { //try 블록 안에선 예외가 발생할 수 있는 코드를 실행한다.
      //axios.get을 사용해 HTTP GET 요청을 보내고, 응답을 response에 저장한다.
      const response = await axios.get(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${API_KEY}&pageNo=1&numOfRows=5&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=12&_type=json`);
      //응답으로 받은 데이터에서 필요한 부분을 추출해 setData를 통해 data상태를 업데이트 한다.
      setData(response.data.response.body.items.item);
    } catch (error) { //try 블록 안의 코드에서 예외가 발생시 catch 블록이 실행된다.
      console.error("에러", error);
    }
  /* useCallback의 두 번째 인자로 빈 배열을 전달함으로서,
   loadData 함수는 컴포넌트가 마운트될 때만 생성된다. */
  }, []);

  useEffect(() => {
    loadData();
  }, []); // 처음 실행시키기 위해

  //이미지 조회 실행을 위해 
  useEffect(() => {
    if (data.length > 0) { //받아온 값이 존재할때 실행하기 위한 코드 
      loadImg(data);
    }
  }, [data]); // data가 없데이트 되었을때 

  //이미지 조회
  const loadImg = async (data) => {
    const imgUrls = [];
    for (let i = 0; i < data.length; i++) {
      try {
        const response = await axios.get(`http://apis.data.go.kr/B551011/KorService1/detailImage1?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${data[i].contentid}&imageYN=Y&subImageYN=Y&_type=json`);
        imgUrls.push(response.data.response.body.items.item[0].originimgurl);
      } catch (error) {
        console.error("에러", error);
      }
    }
    setImgIndex(0); //이미지 조회 후 인덱스 0으로 초기화
    setImg(imgUrls);//배열로 저장한 이미지 주소 저장
  };

  const imgButton = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  return (
    <div>
      <button onClick={imgButton}>이미지</button> 
      <img src={img[imgIndex]} alt="이미지" />
    </div>
  );
  
};
export default App;