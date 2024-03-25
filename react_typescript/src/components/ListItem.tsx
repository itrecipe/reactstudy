/* 함수 컴포넌트 자체 타입정의(FC)
컴포넌트명 뒤에 일반 타입과 동일하게 지정한다.
Props 타입은 제네릭으로 지정한다. */
import type { FC } from "react";
import type { User } from "../types/user";

//Props 타입 정의를 하는 방법
/*
type User = {
    id: number;
    name: string;
    age: number;
    personalColor: string;
}
*/

// props에 타입을 정의

// export const ListItem = props => { 이전 코드

// export const ListItem = (props: User) => { 이전 코드 - 1

export const ListItem: FC<User> = props => {
    //const { id, name, age } = props; 이전 코드

    //const { id, name, age, personalColor = "grey" } = props; 이전 코드 - 1

    //const { id, name, age, personalColor } = props; 이전 코드 - 2
    const { id, name, age, personalColor, hobbies } = props;
    return (
        <p style={{ color: personalColor }}>
            {/* {id} : {name}({age}) 이전 코드  */}

            {/* {id} : {name}({age}) {hobbies.join(" / ")} 이전 코드 - 1 */}
            
            {id} : {name}({age}) {hobbies?.join(" / ")}
        </p>
    )
}

//생략 가능한 타입정의
/* FC를 이용하여 확실하게 타입을 지정한 후,
defaultProps를 사용해서 디폴트 값을 설정해 줄 수 있다. */
ListItem.defaultProps = {
    personalColor: "grey"
}