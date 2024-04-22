import { Route, Routes } from 'react-router-dom';
import { Main } from './page/Main';
import { Login } from './page/Login';
import { Write } from './page/Write';
import MainList from './components/MainList'

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Main" element={<MainList />} />

        {/* MainList 페이지의 경로 설정 */}
        {/* {dataArray.map((list) => (
          <Route
            key={list.id} // 각 Route에 고유한 속성을 지정
            path={`/${list.id}`} // 경로를 설정
            element={<MainList id={list.id} url={list.url} name={list.name} />} // 데이터를 전달
          />
        ))} */}

        <Route path="/Login" element={<Login />} />
        <Route path="/Write" element={<Write />} />
      </Routes>
    </div>
  );
}