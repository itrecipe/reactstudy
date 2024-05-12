import React from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail"

//5.3 버전은 Switch 지원이 안되는 이슈가 있어서 6.23 버전으로 업그레이하고 임포트문을 수정했다.
//명령어 npm install react-router-dom@latest
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
  <Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Movie/:id" element={<Detail/>} />
    {/* path="/Movie/:id" id값이 뭔지 알고 싶다고 말하는것 */}
  </Routes>
  </Router>
  );
}

export default App;