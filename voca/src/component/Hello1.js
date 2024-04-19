import World from "./World"

//컴포넌트 생성방법-1
/*
const Hello = function() {
    <p>Hello</p>;
}
*/

//컴포넌트 생성방법-2
/*
const Hello = () => { //화살표 함수로 작성하는 방법
    <p>Hello</p>
}
*/

//컴포넌트 생성방법-3
export default function Hello() {
    let name = "Mike";

    function changeName() {
        name = name === "Mike" ? "Jane" : "Mike";
    }

    return (
        <div>
            <h1>Hello</h1> {/*</div>여기서 p태그는 return을 해줘야 한다. */}
            <World /> 
        </div>
    );
    //div 태그가 없으면 에러가 나는데 이유는 JSX는 하나의 태그만 만들 수 있다.
}