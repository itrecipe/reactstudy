import { Link } from 'react-router-dom';
export const Main = () =>{

    return(
        <div>
        <li><Link to="/">main</Link></li>
        <li><Link to="/Login">login</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        </div>
    )
}