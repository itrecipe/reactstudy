import { Route, Routes } from 'react-router-dom';
import {Main} from './page/Main';
import {Login} from './page/Login';
import {Write} from './page/Write';
export const App=()=>{

    return(
        <div>
        <Routes >
        <Route path="/" element={<Main />} />
        
        {/* {arrays.map((list) => 
          <Route path={`/${list.id}`} element={Main id={array}
        ))} */}


        <Route path="/Login" element={<Login />} />
        <Route path="/Write" element={<Write />} />
      </Routes >
        </div>
    )
}