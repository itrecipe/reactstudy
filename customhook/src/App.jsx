import { useFetchUsers } from "./hooks/useFetchUsers"

export const App= () => {
  
  // const [userList, setUserList] = useState([]) // 이전에 작성한 코드
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers()
  console.log(userList); // [{ id: 1 }]

  // 사용자 정보를 얻기 버튼 클릭시 액션
  /* 이전에 axios improt 해서 사용했던 코드
  const onClickFetchUser = () => {
    // 버튼 클릭시 로딩 on, 에러 플래그 off
    setIsLoading(true);
    setIsError(false);

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
  */

  return (
    <div>
      <button onClick={onClickFetchUser}>사용자 정보 얻기</button>
       {/* 에러 발생 시 에러 메시지 표시 */}
      {isError && <p style={{ color: "red"}}>에러 발생!</p>}
       {/* 로딩 중에는 표시를 전환한다 */}{" "}
      {isLoading ? (
        <p>데이터를 가져오는 중</p>
      ) : ( 
        userList.map(user => (
          <p key={user.id}>{`${user.id} : ${user.name}(${user.age}세)`}</p>
        ))
      )}
    </div>
  )
}

export default App