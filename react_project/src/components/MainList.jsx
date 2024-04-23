import React, { useEffect } from "react";

function MainList({ arrays }) { //props로 배열을 받아오기
    // useEffect(()=>{

    //     arrays.map((item,index)=>{
    //         console.log(arrays[index].url)
    //     })
        
    // },[])


    return (
       
        // <div className="main">
        //     {arrays.map((item, index) => ( //배열 순회

        //         <div className="list" key={index}> {/* 각 요소에 고유한 key 속성을 지정한다. */}
        //             <img src={arrays[index].url} className="img" alt={arrays[index].name} /> {/* 이미지 출력 */}
        //             <div className="list_text">
        //                 <p>ID: {arrays[index].id}</p> {/* 콘텐츠 ID 출력 */}
        //                 <p>URL: {arrays[index].url}</p> {/* 이미지 URL 주소 출력 */}
        //                 <img src={arrays[index].url}></img>
        //                 <p>Title: {arrays[index].name}</p> {/* 제목 출력 */}
        //             </div>
        //         </div>
        //     ))}
        // </div>

        <div className="main">


            <div className="list"> {/* 각 요소에 고유한 key 속성을 지정한다. */}
                <img src={arrays.url} className="img" alt={arrays.name} /> {/* 이미지 출력 */}
                <div className="list_text">
                    <p>ID: {arrays.id}</p> {/* 콘텐츠 ID 출력 */}
                    <p>URL: {arrays.url}</p> {/* 이미지 URL 주소 출력 */}
                    <img src={arrays.url}></img>
                    <p>Title: {arrays.name}</p> {/* 제목 출력 */}
                </div>
            </div>

    </div>
    )
}

//기본 내보내기 사용
export default MainList;

