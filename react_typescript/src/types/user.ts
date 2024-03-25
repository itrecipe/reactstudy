//타입 정의 관리 : 여러 위치에서 사용하는 경우는 하나의 타입을 여러 컴포넌트에서 재사용하는 것이 좋다.

export type User = {
    id: number;
    name: string;
    age: number;
    //personalColor: string; 이전 코드
    personalColor?: string;
    //생략 가능 타입정의는 ?를 붙이면 된다.

    /* 옵셔널 체이닝
    1. 객체 안 속성을 신경쓰지 않고 안전히 처리해주는 구조
    2. 기능 추가에 따른 타입 정의를 수정
    */
    hobbies?: string[];
}