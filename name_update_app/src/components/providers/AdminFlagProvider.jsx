import { createContext, useState } from "react";

//작성한 Context의 Provider로 글로벌 State를 다루고자 하는 컴포넌트를 감싼다.
export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
    const { children } = props;

    // 관리자 플래그
    const [isAdmin, setIsAdmin] = useState(false);

    //동작 확인을 위해 적절한 객체 정의
    //const sampleObj = { sampleValue: "테스트" }

    return (
        // Context 객체로서 isAdmin과 setIsAdmin을 설정한다 (객체 생략 표기법)
        <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AdminFlagContext.Provider>

        /* 기존에 테스트를 위해 작성했던 이전코드
        <AdminFlagContext.Provider value={sampleObj}>
            {children}
        </AdminFlagContext.Provider>
        */
    )
}