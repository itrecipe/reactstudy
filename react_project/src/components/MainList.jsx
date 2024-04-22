import React from "react";

function MainList({ arrays }) { //props로 배열을 받아오기
    return (
        <div className="main">
            {arrays.map((item, index) => ( //배열 순회

                <div className="list" key={index}> {/* 각 요소에 고유한 key 속성을 지정한다. */}
                    <img src={item.url} className="img" alt={item.name} /> {/* 이미지 출력 */}
                    <div className="list_text">
                        <p>ID: {item.id}</p> {/* 콘텐츠 ID 출력 */}
                        <p>URL: {item.url}</p> {/* 이미지 URL 주소 출력 */}
                        <p>Title: {item.name}</p> {/* 제목 출력 */}
                    </div>
                </div>
            ))}
        </div>
    )
}

//기본 내보내기 사용
export default MainList;

