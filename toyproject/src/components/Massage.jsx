import {Fors} from "./Fors.jsx";

export const Massage = (props) => {
    const display= () => {
    if (props.value==='1'){
        console.log(props.name)
        return (
            <>
        <h1>{props.name}</h1>
        <Fors number={parseInt(props.name)}/>
        </>
        )




    }
    else if (props.value==='2'){
        return <h1>헬로</h1>
    }
    else {
        return <h1>버튼을 눌러주세요</h1>
    }
}

return display();

};