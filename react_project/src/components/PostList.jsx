import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export const PostList=({title,name,kjy,delebutton,id})=>{

    const onclick=()=>{
        const confirmDelete = window.confirm("문서를 삭제하시겠습니까?");
        if(confirmDelete){
        delebutton(id);}
        
    }


    return(
                    
                    <tr>
                        <th scope="row">{kjy}</th>
                        <td><Link to={`/${kjy}`}>{name}</Link></td>
                        <td>{title}</td>
                        <td><button onClick={onclick}>삭제</button></td>

                    </tr>

    )
}