import { Route, Routes } from 'react-router-dom';
import {Main} from './page/Main';
import {Login} from './page/Login';
export const App=()=>{

    return(
        <div>
        <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
      </Routes >
        </div>
    )
}