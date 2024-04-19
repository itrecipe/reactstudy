import { useState } from "react"; //useState는 import를 해줘야 쓸 수 있다.

//props는 부모컴포넌트에서 자식컴포넌트로 데이터를 전달하는데 사용한다.(매개변수 라고 생각하면 된다.)
export default function Hello(props) { //이전에는 아무런 인자값을 넣어준적이 없었으나 props를 넣으면 해당 부분으로 입력 받은 값들이 들어온다.

    console.log(props);
    
    const [name, setName] = useState('Mike'); 
    const [age, setAge] = useState(props.age); //만약 값을 변경하고 싶다면 새로 만들어줘야함
   
    function changeName() {

        setName(name === "Mike" ? "Jane" : "Mike")
        setAge(age + 1);
        console.log(name);
    }

    return (
        <div>
            <h1>State</h1>
            <h2 id='name'>
                {name}({props.age}세)
            </h2> {/* id가 name인 것을 변경 */}
        </div>
    );
}