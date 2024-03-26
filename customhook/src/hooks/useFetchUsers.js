import { useState } from "react"
import axios from "axios"

//사용자 목록을 얻는 사용자 정의 훅
export const useFetchUsers = () => { //컴포넌트화시킴

    //const [userList, setUserList] = useState([{ id: 1 }]) //이전에 작성한 코드
    const [userList, setUserList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    //const onClickFetchUser = () => alert('함수 실행') //이전 작성 코드

    //사용자 정보 얻기 버튼 클릭 시 액션 수행
    const onClickFetchUser = () => {
        // 버튼 클릭 시 로딩 플래그 on, 에러 플래그 off
        setIsLoading(true)
        setIsError(false)

        // API 실행
        axios
            .get("https://example.com/users")
            .then(result => {
                // 성과 이름을 결합 하도록 설정
                const users = result.data.map(user => ({
                    id: user.id,
                    name: `${user.lastname} ${user.firstname}`,
                    age: user.age
                }))
                // 사용자 목록 State 업데이트
                setUserList(users);
            })
            // 에러가 발생하면 에러 플래그 on
            .catch(() => setIsError(true))
            // 처리가 완료된 뒤에는 로딩 플래그 off
            .finally(() => setIsLoading(false))
    }
    
    //모아서 반환할 객체 설정
    return { userList, isLoading, isError, onClickFetchUser }
}
