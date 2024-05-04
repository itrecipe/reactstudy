// import React, { useState, useEffect } from 'react';
import axios from 'axios';
import React, { useCallback, useState,useEffect } from "react";
function App() {
  // 데이터를 저장할 상태 생성
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 데이터 가져오기
  useEffect(() => {
    fetchData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 함

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(`???`);
      // const jsonData = await response.json(); // JSON 데이터를 파싱
      setData(response.data); // 상태 업데이트
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false)
  };

  useEffect(() => {
    console.log(data)
  }, [data,fetchData]);

  // UI 렌더링
  return (
    // <div>
    //   <h1>데이터 목록</h1>
    //   <ul>
    //     {/* {data.map((item,index) => (
    //       <li key={index}>{item}</li> // 예를 들어, 각 아이템에는 id와 name 필드가 있다고 가정
    //     ))} */}
    //     <p>{JSON.stringify(data, null, 2)}</p>

        
    //   </ul>
    // </div>

    <div>
    {loading ? (
      <div>로딩 중...</div>
    ) : (
      <div>
{/* {data.map((item, index) => (
<div key={index}>
  <p>주소: {item.addr1}</p>
  <p>제목: {item.title}</p>

</div>
))} */}
<p>{JSON.stringify(data, null, 2)}</p>

    
      </div>

    )}
  </div>
  );
}

// export const App = () => {
//   const key = "RMLweHeGwN%2B8KPNZCwR2W56r6zhRfTsr%2FFE%2B8arn77y8MBjbWpbJClN2aRsyY3Br9XEojgftBJEBHS2O%2BzysyQ%3D%3D";
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const loadData = useCallback(async () => {
//     try {
//       const response = await axios.get(`http://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=EhOPrqvOFlQuM2RT1SYZjtaF0fQA%2FIwoVnXtp4A1aZ%2FY%2BPespSMXPh7HoqwKnDlLnymOEys8PBCnF88OZwAe4Q%3D%3D&numOfRows=10&
//       pageNo=1&MobileOS=AND&MobileApp=appName&_type=json`);
//       // setData(response.data.response.body.items.item);
//       setData(response.data);

//     } catch (error) {
//       console.error("에러", error);
//     }
//     setLoading(false)
    
//   }, []);

//   // 컴포넌트가 마운트되었을 때 데이터를 로드합니다.
//   useEffect(() => {
//     loadData();
//     console.log(data);

    
//   }, [loadData,data]);

//   return (
//     <div>
//       {loading ? (
//         <div>로딩 중...</div>
//       ) : (
//         <div>
//   {/* {data.map((item, index) => (
//   <div key={index}>
//     <p>주소: {item.addr1}</p>
//     <p>제목: {item.title}</p>
 
//   </div>
// ))} */}
//   <p>{JSON.stringify(data, null, 2)}</p>

      
//         </div>

//       )}
//     </div>
//   );
// };


export default App;