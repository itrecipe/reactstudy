export const Fors = (props) => {
    let ans=""
    const display = () =>{
        const text=[]
        for (let i=0; i<props.number;i++){
            ans=<p>{i}</p>;
            text.push(ans)

        }
        return text

    }

    return (
        <div>
            {display()}
        </div>
    );

}