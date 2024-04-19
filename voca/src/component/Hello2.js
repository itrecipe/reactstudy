import { useState } from "react"; //useState는 import를 해줘야 쓸 수 있다.

export default function Hello() {
    // let name = "Mike";

    const [name, setName] = useState('Mike'); //useState사용방법, useState는 배열을 반환한다. ()안에는 초기값을 넣어주면된다.

    function changeName() {
        
        //dom 업데이트를 시켜줘야 변경되는 동작을 구현할 수 있다.
                
        //useState 이전에 작성한 코드 : name = name === "Mike" ? "Jane" : "Mike";
        //useState 이전에 작성한 dom 업데이트 하는 코드 : document.getElementById("name").innerText = name;
        
        
        //const newName = name === "Mike" ? "Jane" : "Mike"; //이렇게 선언해서 써도 됨
        //setName(newName);
        setName(name === "Mike" ? "Jane" : "Mike")
        console.log(name);
    }

    return (
        <div>
            <h1>State</h1>
            <h2 id='name'>{name}</h2> {/* id가 name인 것을 변경 */}
            <button onClick={changeName}>Change</button>
        </div>
    );
}