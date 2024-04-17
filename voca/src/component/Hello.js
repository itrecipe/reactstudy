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
    return <p>Hello</p>; //여기서 p태그는 return을 해줘야 한다.
}