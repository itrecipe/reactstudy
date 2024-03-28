export const Fors = (props) => {
    let ans=""
    const a=["a","b","c"]
    const display = () =>{
        const text=[]
        for (let i=0; i<a.length;i++){
            ans=<p>{a[i]}</p>;
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