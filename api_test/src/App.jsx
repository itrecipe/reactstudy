import React, { useCallback, useState, useEffect } from "react"; // React 및 필요한 hook 가져오기
import axios from 'axios'; // HTTP 요청을 보내기 위한 axios 라이브러리 가져오기

export const App = () => { // App 컴포넌트 정의

  const API_KEY = "???"; // API 키 상수 선언

  const [data, setData] = useState([]); // 데이터 상태 변수 및 업데이트 함수 선언
  const [imgIndex, setImgIndex] = useState(0); // 이미지 인덱스 상태 변수 및 업데이트 함수 선언
  const [img, setImg] = useState([]); // 이미지 URL 상태 변수 및 업데이트 함수 선언

  const loadData = useCallback(async () => { // 데이터를 비동기적으로 로드하는 함수 정의
    try {
      const response = await axios.get(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${API_KEY}&pageNo=1&numOfRows=5&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=12&_type=json`); // HTTP GET 요청 보내기
      setData(response.data.response.body.items.item); // 데이터 상태 업데이트
    } catch (error) {
      console.error("에러", error); // 에러 처리
    }
  }, []); // 컴포넌트 마운트 시 한 번만 실행되도록 설정

  useEffect(() => { // 데이터 로드를 위한 useEffect 훅
    loadData(); // 데이터 로드 함수 실행
  }, []); // 컴포넌트가 처음 렌더링될 때 실행되도록 설정

  useEffect(() => { // 데이터가 업데이트될 때마다 실행되는 useEffect 훅
    if (data.length > 0) { // 데이터가 존재하는 경우
      loadImg(data); // 이미지 로드 함수 실행
    }
  }, [data]); // 데이터가 업데이트될 때마다 실행되도록 설정

  const loadImg = async (data) => { // 이미지 로드 함수 정의
    const imgUrls = []; // 이미지 URL 배열 초기화
    for (let i = 0; i < data.length; i++) { // 데이터 배열 순회
      try {
        const response = await axios.get(`http://apis.data.go.kr/B551011/KorService1/detailImage1?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${data[i].contentid}&imageYN=Y&subImageYN=Y&_type=json`); // HTTP GET 요청 보내기
        imgUrls.push(response.data.response.body.items.item[0].originimgurl); // 이미지 URL 배열에 추가
      } catch (error) {
        console.error("에러", error); // 에러 처리
      }
    }
    setImgIndex(0); // 이미지 인덱스 초기화
    setImg(imgUrls); // 이미지 URL 상태 업데이트
  };

  const imgButton = () => { // 이미지 변경 버튼 핸들러 함수 정의
    setImgIndex((prevIndex) => (prevIndex + 1) % img.length); // 이미지 인덱스 업데이트
  };

  return (
    <div> {/* JSX를 반환 */}
      <button onClick={imgButton}>이미지</button> {/* 이미지 변경 버튼 */}
      <img src={img[imgIndex]} alt="이미지" /> {/* 현재 이미지 표시 */}
    </div>
  );
};

export default App; // App 컴포넌트 내보내기