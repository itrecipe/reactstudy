import {Massage} from "./components/Massage.jsx";
import {useState } from "react";


export function App() {

  const [str ,setStr] = useState("");
  const [num ,setNum] = useState(0);
  const onClickButton = (event) => {
    setNum(event.target.value)
    console.log(event.target.value)
    setStr("")

  };

  const onChangeInput = (event) =>{
    setStr(event.target.value.toString())
  }


  return (

    <>
    <button onClick={onClickButton} value='1' >1번</button>
    <button onClick={onClickButton} value='2' >2번</button>
    <input type="text" value={str} onChange={onChangeInput} ></input>
    <Massage value={num} name={str}/>
    </>

  );
}


