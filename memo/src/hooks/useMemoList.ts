import { useCallback, useState } from "react";

// 메모 목록에 관한 사용자 정의 훅
export const useMemoList = () => {
    // 메모 목록 State
    const [memos, setMemos] = useState<string[]>([]);

    // 메모 추가 로직
    const addTodo = useCallback((text: string) => {
        // State 변경을 정상적으로 감지하기 위해 새로운 배열 생성
        const newMemos = [...memos];
        // 텍스트 박스 입력 내용을 메모 배열에 추가
        newMemos.push(text);
        setMemos(newMemos);
        // 의존 배열을 잊지 않도록 momos 추가
    }, [memos]);

    // 메모 삭제 로직
    const deleteTodo = useCallback(
        (index: number) => {
            // State 변경을 정상 감시하도록 하기 위한 새로운 배열을 생성한다.
            const newMemos = [...memos];
            // 메모 배열에서 해당 요소를 삭제한다.
            setMemos(newMemos)
        }, [memos])
    
    return { memos, addTodo, deleteTodo }
}