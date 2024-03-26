import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  //사용자 정의 훅으로 각각 얻기
  const { memos, addTodo, deleteTodo } = useMemoList()

  //텍스트 박스 State
  const [text, setText] = useState<string>("");

  //메모 목록 State
  //const [memos, setMemos] = useState<string[]>([]); //컴포넌트화 이전 코드

  //텍스트 박스 입력시 입력 내용을 State에 설정한다.
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)

  //[추가] 버튼 클릭 시
  const onClickAdd = () => {

    /* //컴포넌트화 이전 코드
    //State 변경을 정상적을고 감지하기 위해 새로운 배열 생성
    const newMemos = [...memos] 
    //텍스트 박스 입력 내용을 메모 배열에 추가
    newMemos.push(text);
    setMemos(newMemos)
    */

    //사용자 정의 훅의 메모 추가 로직을 실행
    addTodo(text); //추가

    //텍스트 박스 비우기
    setText("");
  }

  //[삭제] 버튼 클릭 시(몇 번째 버튼이 클릭되었는지 인수로 전달)
  //const onClickDelete = (index: number) => { //이전에 작성한 코드
  const onClickDelete = useCallback((index: number) => {

    /* 컴포넌트화 이전 작성코드
    // State 변경을 정상적으로 감지하기 위해 새로운 배열 생성
    const newMemos = [...memos];
    // 메모 배열로부터 해당 요소 삭제
    newMemos.splice(index, 1);
    setMemos(newMemos);
  
    // } //이전 작성코드
  }, [memos]);
    */

    //사용자 정의 훅의 메모 삭제 로직을 실행
    deleteTodo(index)
  },
    [deleteTodo]
  );

  return (
    <div>
      <h1>간단 메모 애플리케이션</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>추가</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />

      {/* 컴포넌트화 이전 작성한 코드
      <SContainer>
        <p>메모 목록</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onClickDelete(index)}>삭제</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer> */}

    </div>
  )
}

const SButton = styled.button`
  margin-left: 16px;
  `;

/* 컴포넌트화 이전에 작성한 코드
  const SContainer = styled.div`
  border: solid 1px #ccc
  padding: 16px

  margin: 8px
  `
  const SMemoWrapper = styled.div`
  display: flex
  align-items: center
  `
*/